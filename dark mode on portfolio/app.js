function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
  }
  
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  darkModeToggle.addEventListener("click", toggleDarkMode);
  