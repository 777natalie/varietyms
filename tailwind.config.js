/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A0F1E",
        "dark-blue": "#1B3A6B",
        "electric-blue": "#3B82F6",
        bison: "#7B3F2A",
      },
      fontFamily: {
        russo: ['"Russo One"', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}