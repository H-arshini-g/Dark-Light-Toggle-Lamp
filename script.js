const body = document.body;
const string = document.getElementById('pull-string');

// Load saved theme or default light
const savedTheme = localStorage.getItem('theme') || 'light';
body.classList.add(savedTheme);

// Set initial lamp bulb look based on theme
updateLampBulb(savedTheme);

string.addEventListener('click', () => {
  // Animate string pull briefly
  string.classList.add('pulled');
  setTimeout(() => string.classList.remove('pulled'), 200);

  // Toggle dark/light mode
  if (body.classList.contains('light')) {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
    updateLampBulb('dark');
  } else {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
    updateLampBulb('light');
  }
});

function updateLampBulb(theme) {
  const bulb = document.querySelector('.lamp-bulb');
  if (theme === 'dark') {
    bulb.style.backgroundColor = '#444'; // Dim bulb in dark mode
    bulb.style.boxShadow = 'none';
  } else {
    bulb.style.backgroundColor = '#ffeb3b'; // Bright bulb in light mode
    bulb.style.boxShadow = '0 0 20px #ffeb3b';
  }
}
