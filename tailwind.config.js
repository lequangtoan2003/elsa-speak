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
      },
      animation: {
        popoverDown: 'popoverSlideDown 0.3s ease-out',  // Animation slide xuống
        popoverUp: 'popoverSlideUp 0.3s ease-in',  // Animation slide lên
      },
      keyframes: {
        popoverSlideDown: {
          '0%': {
            transform: 'translateX(-20px) scale(0.8)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0) scale(1)',
            opacity: '1',
          },
        },
        popoverSlideUp: {
          '0%': {
            transform: 'translateY(0) scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-20px) scale(0.8)',
            opacity: '0',
          },
        },
      },
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
