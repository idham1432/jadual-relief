document.addEventListener("DOMContentLoaded", function () {
  // Back to Top Button Logic
  const backToTopBtn = document.getElementById('backToTopBtn');
  window.addEventListener('scroll', function () {
    backToTopBtn.style.display = (window.scrollY > 200) ? 'block' : 'none';
  });
  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Notes Button and Dialog Logic
  const notesBtn = document.getElementById('notesBtn');
  const notesDialog = document.getElementById('notesDialog');
  const closeNotesBtn = document.getElementById('closeNotesBtn');

  notesBtn.addEventListener('click', function () {
    notesDialog.showModal();
  });

  closeNotesBtn.addEventListener('click', function () {
    notesDialog.close();
  });
});
