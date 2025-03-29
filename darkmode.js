
//darkmode

document.addEventListener('DOMContentLoaded', () => {
    // Get theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    
    // Get current theme from localStorage or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateButtonIcon(currentTheme);
  
    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateButtonIcon(newTheme);
    });
  
    // Update button icon based on theme
    function updateButtonIcon(theme) {
      themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  });