document.addEventListener("DOMContentLoaded", function () {
  const toggleNotesBtn = document.getElementById("toggleNotesBtn");
  const notesBox = document.getElementById("notesBox");

  toggleNotesBtn.addEventListener("click", function () {
    if (notesBox.style.display === "none" || notesBox.style.display === "") {
      notesBox.style.display = "block";
    } else {
      notesBox.style.display = "none";
    }
  });
});

