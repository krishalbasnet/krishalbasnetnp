let electionData = [];
let prData = {}; // { PartyName: votes }
const constituenciesContainer = document.getElementById('constituencies-container');
const winnersList = document.getElementById('winners-list');
const partySummaryBody = document.getElementById('party-summary-body');
const prBody = document.getElementById('pr-body');
const searchInput = document.getElementById('search');
const districtFilter = document.getElementById('district-filter');
const saveBtn = document.getElementById('save-btn');

let isAdmin = false;

async function init() {
    // Check for saved password
    const savedPassword = localStorage.getItem('admin_password');
    if (savedPassword) {
        document.getElementById('admin-password').value = savedPassword;
        await loginAdmin();
    }

    try {
        const response = await fetch('/api/data');
        const fullData = await response.json();
        
        // Handle both old and new data structure
        if (Array.isArray(fullData)) {
            electionData = fullData;
            prData = {};
        } else {
            electionData = fullData.electionData || [];
            prData = fullData.prData || {};
        }
        
        // Populate filters
        const districts = [...new Set(electionData.map(c => c.DistrictName))].sort();
        districts.forEach(d => {
            const opt = document.createElement('option');
            opt.value = d;
            opt.textContent = d;
            districtFilter.appendChild(opt);
        });

        // Initialize PR data for all parties if empty
        const allParties = [...new Set(electionData.map(c => c.PoliticalPartyName))].sort();
        allParties.forEach(p => {
            if (prData[p] === undefined) prData[p] = 0;
        });

        // Initial render
        renderAll();

        // Event listeners
        searchInput.addEventListener('input', renderAll);
        districtFilter.addEventListener('change', renderAll);
        saveBtn.addEventListener('click', saveData);
        document.getElementById('admin-login-btn').addEventListener('click', loginAdmin);
        document.getElementById('admin-logout-btn').addEventListener('click', logoutAdmin);

    } catch (e) {
        console.error('Failed to load data:', e);
    }
}

async function loginAdmin() {
    const password = document.getElementById('admin-password').value;
    if (!password) return;

    // We don't verify here yet, we verify on first SAVE. 
    // But we update UI to reflect "attempted" admin mode
    isAdmin = true;
    localStorage.setItem('admin_password', password);
    document.body.classList.add('admin-mode');
    document.getElementById('admin-login-btn').style.display = 'none';
    document.getElementById('admin-password').style.display = 'none';
    document.getElementById('admin-logout-btn').style.display = 'block';
}

function logoutAdmin() {
    isAdmin = false;
    localStorage.removeItem('admin_password');
    document.body.classList.remove('admin-mode');
    document.getElementById('admin-login-btn').style.display = 'block';
    document.getElementById('admin-password').style.display = 'block';
    document.getElementById('admin-password').value = '';
    document.getElementById('admin-logout-btn').style.display = 'none';
}

function renderAll() {
    renderMainGrid();
    renderWinnersAndSummary();
    renderPRTable();
}

function renderMainGrid() {
    const query = searchInput.value.toLowerCase();
    const district = districtFilter.value;

    const filtered = electionData.filter(c => {
        const matchesQuery = c.CandidateName.toLowerCase().includes(query) || 
                             c.PoliticalPartyName.toLowerCase().includes(query) ||
                             c.ConstName.toString().includes(query);
        const matchesDistrict = !district || c.DistrictName === district;
        return matchesQuery && matchesDistrict;
    });

    const grouped = {};
    filtered.forEach(c => {
        const key = `${c.DistrictName} - Constituency ${c.ConstName}`;
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(c);
    });

    const sortedGroups = Object.keys(grouped).sort((a, b) => {
        const winnerA = grouped[a].some(c => c.won);
        const winnerB = grouped[b].some(c => c.won);
        if (winnerA === winnerB) return a.localeCompare(b);
        return winnerA ? 1 : -1;
    });

    const html = sortedGroups.map(groupKey => {
        const candidates = grouped[groupKey];
        const winner = candidates.find(c => c.won);
        
        return `
            <div class="constituency-group">
                <div class="constituency-header">
                    <span>${groupKey}</span>
                    ${winner ? `<span style="color: var(--winner-gold)">Winner Decided</span>` : ''}
                </div>
                <div class="candidates-row">
                    ${candidates.map(c => `
                        <div class="candidate-card ${c.won ? 'won' : ''}">
                            <div>
                                <div class="candidate-name">${c.CandidateName}</div>
                                <div class="party-name">${c.PoliticalPartyName}</div>
                                <input type="number" class="candidate-vote-input" 
                                    placeholder="Votes..." 
                                    value="${c.midwayVotes || ''}" 
                                    onchange="updateMidwayVotes(${c.CandidateID}, this.value)"
                                    min="0">
                            </div>
                            <button class="won-btn" onclick="toggleWon(${c.CandidateID})">
                                ${c.won ? 'WON' : 'SET WINNER'}
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');

    constituenciesContainer.innerHTML = html || '<p style="text-align:center; color: var(--text-muted)">No matching candidates found.</p>';
}

function renderWinnersAndSummary() {
    const winners = electionData.filter(c => c.won);
    
    // Find Leading candidates for constituencies without a winner
    const constituencies = {};
    electionData.forEach(c => {
        const key = `${c.DistrictName}-${c.ConstName}`;
        if (!constituencies[key]) constituencies[key] = { winner: null, candidates: [] };
        constituencies[key].candidates.push(c);
        if (c.won) constituencies[key].winner = c;
    });

    const displayList = [];
    Object.values(constituencies).forEach(con => {
        if (con.winner) {
            displayList.push({ ...con.winner, status: 'WINNER' });
        } else {
            // Find leading candidate (max midwayVotes > 0)
            const leading = con.candidates
                .filter(c => (c.midwayVotes || 0) > 0)
                .sort((a, b) => (b.midwayVotes || 0) - (a.midwayVotes || 0))[0];
            if (leading) {
                displayList.push({ ...leading, status: 'LEADING' });
            }
        }
    });

    // Summary Table (Official Winners + Leading)
    const partyStats = {}; // { Party: { won: 0, leading: 0 } }
    
    // Process displayList to tally party stats
    displayList.forEach(item => {
        if (!partyStats[item.PoliticalPartyName]) {
            partyStats[item.PoliticalPartyName] = { won: 0, leading: 0 };
        }
        if (item.status === 'WINNER') {
            partyStats[item.PoliticalPartyName].won++;
        } else if (item.status === 'LEADING') {
            partyStats[item.PoliticalPartyName].leading++;
        }
    });

    const sortedParties = Object.entries(partyStats).sort((a, b) => {
        if (b[1].won !== a[1].won) return b[1].won - a[1].won;
        return b[1].leading - a[1].leading;
    });

    partySummaryBody.innerHTML = sortedParties.map(([party, stats]) => `
        <tr>
            <td>${party}</td>
            <td style="color: var(--winner-gold); font-weight: 800;">${stats.won}</td>
            <td style="color: var(--accent); font-weight: 600;">${stats.leading}</td>
        </tr>
    `).join('') || '<tr><td colspan="3" style="text-align:center">No results declaring yet</td></tr>';

    // Winners/Leading List
    winnersList.innerHTML = displayList.sort((a, b) => {
        if (a.status !== b.status) return a.status === 'WINNER' ? -1 : 1;
        return a.CandidateName.localeCompare(b.CandidateName);
    }).map(w => `
        <div class="winner-card ${w.status === 'LEADING' ? 'leading-card' : ''}">
            <div style="font-size: 0.75rem; color: ${w.status === 'WINNER' ? 'var(--winner-gold)' : 'var(--accent)'}; font-weight: bold; margin-bottom: 0.5rem;">
                ${w.status}
            </div>
            <div class="candidate-name">${w.CandidateName}</div>
            <div class="party-name" style="color: var(--text-main)">${w.PoliticalPartyName}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem;">
                ${w.DistrictName} - ${w.ConstName} ${w.status === 'LEADING' ? `(${w.midwayVotes} votes)` : ''}
            </div>
        </div>
    `).join('') || '<p style="color: var(--text-muted)">No results yet.</p>';
}

function renderPRTable() {
    const parties = Object.keys(prData).sort();
    const totalVotes = Object.values(prData).reduce((a, b) => a + b, 0);
    
    // Calculate 3% threshold and redistribute
    const threshold = totalVotes * 0.03;
    const qualifyingParties = parties.filter(p => prData[p] >= threshold && totalVotes > 0);
    const qualifyingTotalVotes = qualifyingParties.reduce((sum, p) => sum + prData[p], 0);

    prBody.innerHTML = parties.map(p => {
        const votes = prData[p];
        const rawPercent = totalVotes > 0 ? (votes / totalVotes * 100).toFixed(2) : '0.00';
        const isQualifying = votes >= threshold && totalVotes > 0;
        const correctedPercent = (isQualifying && qualifyingTotalVotes > 0) 
            ? (votes / qualifyingTotalVotes * 100).toFixed(2) 
            : '0.00';
        
        const seats = (isQualifying && qualifyingTotalVotes > 0)
            ? Math.round(votes / qualifyingTotalVotes * 110)
            : 0;

        return `
            <tr>
                <td>${p}</td>
                <td>
                    <input type="number" class="pr-input" value="${votes}" 
                        onchange="updatePRVotes('${p}', this.value)" min="0">
                </td>
                <td class="${votes < threshold && totalVotes > 0 ? 'threshold-fail' : ''}">${rawPercent}%</td>
                <td class="${isQualifying ? 'threshold-pass' : 'threshold-fail'}">${correctedPercent}%</td>
                <td style="font-weight: 800; color: var(--winner-gold)">${isQualifying ? seats : '-'}</td>
            </tr>
        `;
    }).join('');
}

function updatePRVotes(party, value) {
    prData[party] = parseInt(value) || 0;
    renderPRTable();
    debounceSave();
}

function updateMidwayVotes(candidateId, value) {
    const candidate = electionData.find(c => c.CandidateID === candidateId);
    if (candidate) {
        candidate.midwayVotes = parseInt(value) || 0;
        // Update the top list immediately
        renderWinnersAndSummary();
        debounceSave();
    }
}

function toggleWon(candidateId) {
    const candidate = electionData.find(c => c.CandidateID === candidateId);
    if (!candidate) return;

    if (!candidate.won) {
        electionData.forEach(c => {
            if (c.DistrictName === candidate.DistrictName && c.ConstName === candidate.ConstName) {
                c.won = false;
            }
        });
        candidate.won = true;
    } else {
        candidate.won = false;
    }

    renderAll();
    debounceSave();
}

let saveTimeout;
function debounceSave() {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(saveData, 2000);
}

async function saveData() {
    if (!isAdmin) return;
    
    try {
        const password = localStorage.getItem('admin_password');
        const payload = { password, data: { electionData, prData } };
        const response = await fetch('/api/data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        
        if (response.ok) {
            showIndicator();
        } else {
            const err = await response.json();
            alert('Save failed: ' + err.error);
            if (response.status === 401) logoutAdmin();
        }
    } catch (e) {
        console.error('Failed to sync data:', e);
    }
}

function showIndicator() {
    const ind = document.getElementById('save-indicator');
    ind.style.display = 'block';
    setTimeout(() => ind.style.display = 'none', 3000);
}

init();
