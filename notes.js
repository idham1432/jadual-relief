document.addEventListener("DOMContentLoaded", function () {
  const toggleNotesBtn = document.getElementById("toggleNotesBtn");
  const notesBox = document.getElementById("notesBox");
  const textarea = notesBox.querySelector("textarea");

  // Load saved note on page load
  const savedNote = localStorage.getItem("userNote");
  if (savedNote) {
    textarea.value = savedNote;
  }

  // Save note on input
  textarea.addEventListener("input", function () {
    localStorage.setItem("userNote", textarea.value);
  });

  // Toggle visibility
  toggleNotesBtn.addEventListener("click", function () {
    if (notesBox.style.display === "none" || notesBox.style.display === "") {
      notesBox.style.display = "block";
    } else {
      notesBox.style.display = "none";
    }
  });

  const clearNotesBtn = document.getElementById("clearNotesBtn");

  // Clear notes on trash icon click
  clearNotesBtn.addEventListener("click", function () {
    textarea.value = "";
    localStorage.removeItem("userNote");
  });
});


