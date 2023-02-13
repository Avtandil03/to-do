/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
let current = '#272727'



module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      272727: current,
    },
  },
  plugins: [],
}


// module.exports = {
//   theme: {
    
//   },
// }