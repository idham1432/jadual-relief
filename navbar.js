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

const toggleIcon = document.getElementById('toggleIcon');

toggleIcon.addEventListener('click', () => {
  if (toggleIcon.classList.contains('fa-toggle-off')) {
    toggleIcon.classList.remove('fa-toggle-off');
    toggleIcon.classList.add('fa-toggle-on');
  } else {
    toggleIcon.classList.remove('fa-toggle-on');
    toggleIcon.classList.add('fa-toggle-off');
  }
});