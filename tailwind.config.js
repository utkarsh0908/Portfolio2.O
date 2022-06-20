/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Varela: ["Varela Round", "sans-serif"],
        Noto: ["Noto Sans", "sans-serif"],
        Roboto: ["Roboto Condensed", "sans-serif"],
        Space: ["Space Grotesk", "sans-serif"],
       },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
