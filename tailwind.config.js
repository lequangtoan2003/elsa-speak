/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#ffffff',
        'color-hover': '#3447cc',
        'color': '#2a2f33',
        'home': '#f7f7fd'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "scrollbar-width": "none", // Ẩn scrollbar trên Firefox
          "-ms-overflow-style": "none", // Ẩn scrollbar trên IE/Edge
        },
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none", // Ẩn scrollbar trên Chrome/Safari
        },
      });
    },
  ],
};
