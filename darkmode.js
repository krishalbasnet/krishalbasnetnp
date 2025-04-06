document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const lampImg = document.querySelector('.lamp-img');
  const mainLogo = document.getElementById('main-logo');
  
  if(themeToggle && lampImg && mainLogo) {
    // Get current theme
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Initialize theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeElements(currentTheme);

    themeToggle.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeElements(newTheme);
    });
  }

  function updateThemeElements(theme) {
    // Update lamp icon
    lampImg.src = theme === 'dark' 
      ? lampImg.dataset.darkIcon 
      : lampImg.dataset.lightIcon;
    
    // Update main logo
    mainLogo.src = theme === 'dark' 
      ? mainLogo.dataset.darkLogo 
      : mainLogo.dataset.lightLogo;
    
    // Optional: Add transition effect class
    mainLogo.classList.add('logo-transition');
    setTimeout(() => mainLogo.classList.remove('logo-transition'), 300);
  }
});