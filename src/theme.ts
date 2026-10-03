export type Theme = "light" | "dark";

const themeStorageKey = "tomer-portfolio-theme";

export function initializeTheme() {
  const savedTheme = window.localStorage.getItem(themeStorageKey);
  const theme: Theme =
    savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

  document.documentElement.dataset.theme = theme;
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem(themeStorageKey, theme);
}
