/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  animation: {
    fade: "fadeIn 0.2s ease-out",
  },
  keyframes: {
    fadeIn: {
      from: { opacity: 0, transform: "translateY(-10px)" },
      to: { opacity: 1, transform: "translateY(0)" },
    },
  },

}

