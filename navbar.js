const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Apply saved theme on load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.classList.add('fa-toggle-on');
    themeToggle.classList.remove('fa-toggle-off');
  } else {
    body.classList.remove('dark-mode');
    themeToggle.classList.add('fa-toggle-off');
    themeToggle.classList.remove('fa-toggle-on');
  }
});

themeToggle.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark-mode');

  // Toggle icon
  themeToggle.classList.toggle('fa-toggle-off');
  themeToggle.classList.toggle('fa-toggle-on');

  // Save to localStorage
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
