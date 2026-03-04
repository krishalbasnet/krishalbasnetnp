const fs = require('fs');

try {
    const raw = fs.readFileSync('raw_data.txt', 'utf8');
    // The data is a JS array, e.g. [{CandidateID: ...}]
    // We can use a simple function to return it
    const data = (new Function('return ' + raw))();
    
    if (!fs.existsSync('Election')) {
        fs.mkdirSync('Election');
    }
    
    fs.writeFileSync('Election/data.json', JSON.stringify(data, null, 2), 'utf8');
    console.log(`Successfully saved ${data.length} candidates to Election/data.json`);
} catch (e) {
    console.error('Error:', e);
}
