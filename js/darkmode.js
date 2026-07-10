(() => {
  const themeButton = document.querySelector("#theme-toggle");
  if (!themeButton) return;

  const applyTheme = (theme) => {
    const isLight = theme === "light";
    document.documentElement.dataset.theme = isLight ? "light" : "dark";
    themeButton.innerHTML = isLight
      ? '<i class="fa-solid fa-moon" aria-hidden="true"></i>'
      : '<i class="fa-solid fa-sun" aria-hidden="true"></i>';
    themeButton.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
    themeButton.setAttribute("title", themeButton.getAttribute("aria-label"));
  };

  const savedTheme = localStorage.getItem("theme");
  const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  applyTheme(savedTheme || preferredTheme);

  themeButton.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
  });
})();
