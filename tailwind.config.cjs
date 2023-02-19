/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
let current = '#272727'



module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      'white': '#fff',
      'black': '#000',
      'main-bg': '#f3f3f3',
      'btn-blue': '#436af2',
      'txt-gray': '#656565'
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      lg: ['18px', '20px'],
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [],
}
