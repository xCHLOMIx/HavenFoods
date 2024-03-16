/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js}"],
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['Comfortaa']
      },
      colors: {
        bad: ['#3d573f']
      },
      height: {
        over: ['120vh']
      }
    },
  },
  plugins: [],
}