/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '440px',
    },
    extend: {
      fontFamily: {
        Figtree: ['Figtree', 'sans-serif'],
        ItalicFigtree: ['ItalicFigtree', 'sans-serif'],
        FigtreeExtraBold: ['FigtreeExtraBold', 'sans-serif'],
        FigtreeSemiBold: ['FigtreeSemiBold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

