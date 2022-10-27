/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'body': ["Poppins", "sans-serif"],
      'heading': ["Tenor Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
