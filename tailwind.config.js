/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff5252', // custom text color
      },
      backgroundColor: {
        primary: '#ff5252', // custom background color
      },
    },
  },
  plugins: [],
}
