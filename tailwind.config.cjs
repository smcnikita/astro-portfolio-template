/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: "#EEE7DA",
        secondary: "#88AB8E",
        light: "#F2F1EB",
        dark: "#262626",
        white: "#fff",
        night: "#2D3250",
      },
    },
  },
};
