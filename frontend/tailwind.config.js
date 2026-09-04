/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#f97316",
          green: "#16a34a",
        },
      },
    },
  },
  plugins: [],
};
