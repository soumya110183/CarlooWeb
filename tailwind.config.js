/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust path to your project folder if needed
    "./public/index.html",
  ],
  darkMode: "class", // <-- enables dark mode via class (controlled by toggle)
  theme: {
    extend: {
        colors: {
    background: "var(--background)",
    foreground: "var(--foreground)",
  },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 300ms ease-out",
        "accordion-up": "accordion-up 300ms ease-out",
      },
    },
  },
  plugins: [],
};
