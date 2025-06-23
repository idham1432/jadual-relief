document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const toggleImg = sidebar.querySelector("img");
  const sidebarIcon = sidebar.querySelector(".sidebarIcon");
  const navbarDiv = document.querySelector(".navbar");
  const textareaContainer = sidebar.querySelector(".textareaContainer");
  const clearButton = document.getElementById("clearTextarea");
  const clearButtonContainer = sidebar.querySelector(".clearButtonContainer");
  const textarea = textareaContainer.querySelector("textarea");

  let isExpanded = false;

  // 🧠 Restore textarea content from localStorage
  const savedText = localStorage.getItem("sidebarTextarea");
  if (savedText !== null && textarea) {
    textarea.value = savedText;
  }

  toggleImg.addEventListener("click", function () {
    isExpanded = !isExpanded;

    // Toggle sidebar width
    sidebar.style.width = isExpanded ? "200px" : "50px";

    // Toggle body padding
    document.body.style.padding = isExpanded
      ? "70px 20px 0 220px"
      : "70px 20px 0 70px";

    // Toggle navbar left
    if (navbarDiv) {
      navbarDiv.style.left = isExpanded ? "200px" : "50px";
    }

    // Toggle justify-content
    sidebarIcon.style.display = "flex";
    sidebarIcon.style.justifyContent = isExpanded ? "flex-end" : "center";

    // Show/hide textarea and clear button
    if (textareaContainer) {
      textareaContainer.style.display = isExpanded ? "block" : "none";
    }
    if (clearButtonContainer) {
      clearButtonContainer.style.display = isExpanded ? "block" : "none";
    }
  });

  // 🖊 Save textarea content to localStorage as user types
  if (textarea) {
    textarea.addEventListener("input", function () {
      localStorage.setItem("sidebarTextarea", textarea.value);
    });
  }

  // 🧹 Clear textarea content and update localStorage
  if (clearButton) {
    clearButton.addEventListener("click", function () {
      if (textarea) {
        textarea.value = "";
        localStorage.setItem("sidebarTextarea", ""); // Clear saved value
      }
    });
  }
});
