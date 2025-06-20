document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});