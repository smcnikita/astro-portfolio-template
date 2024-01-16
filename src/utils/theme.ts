import type { TTheme } from "@/types/theme";

export function setTheme(key: TTheme) {
  const html = document.querySelector("html");

  const buttons = document.querySelectorAll("button[data-theme]");

  buttons.forEach((el) => el.classList.remove("active"));

  if (key === "light") {
    html?.classList.remove("dark");
    html?.classList.add("light");
    localStorage.setItem("theme", "light");
    const button = document.querySelector('button[data-theme="light"]');
    button?.classList.add("active");
    return;
  }

  if (key === "dark") {
    html?.classList.remove("light");
    html?.classList.add("dark");
    localStorage.setItem("theme", "dark");
    const button = document.querySelector('button[data-theme="dark"]');
    button?.classList.add("active");
    return;
  }
}
