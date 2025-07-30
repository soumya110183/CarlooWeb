/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust path to your project folder if needed
    "./public/index.html",
  ],
  darkMode: "class", // <-- enables dark mode via class (controlled by toggle)
  theme: {
    extend: {
      // Optional: Add your custom colors or font here if needed
      // colors: {
      //   brand: "#6366f1"
      // }
    },
  },
  plugins: [],
};
