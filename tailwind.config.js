/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "light-1": "#ffffff",
        "light-2": "#27272a",
        "light-3": "#27272a",
        "accent": "#334155",
        "dark-1": "#1A1C20",
        "dark-2": "#f4f4f5",
        "dark-3": "#a1a1aa",
      }
    },
  },
  plugins: [],
}