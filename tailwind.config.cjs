/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
let current = '#272727'



module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkmode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}


// module.exports = {
//   theme: {
    
//   },
// }