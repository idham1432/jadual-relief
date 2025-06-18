let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 50) {
    // Scrolling down
    navbar.classList.add('navbar--hidden');
  } else {
    // Scrolling up
    navbar.classList.remove('navbar--hidden');
  }

  lastScroll = currentScroll;
});

const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Toggle the icon
  themeToggle.classList.toggle('fa-toggle-off');
  themeToggle.classList.toggle('fa-toggle-on');
});