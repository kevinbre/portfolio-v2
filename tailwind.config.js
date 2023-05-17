/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: ['class', '[data-mode="dark"]'],
  yellowMode: ['class', '[data-mode="yellow"]'],
  purpleMode: ['class', '[data-mode="purple"]'],
}