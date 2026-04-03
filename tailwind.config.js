/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#8ec038',   // The exact Foodily green
        secondary: '#eb5a3e', // The reddish-orange accents
        dark: '#222222',
      },
      fontFamily: {
        // If you can, import 'Poppins' and 'Covered By Your Grace' in index.css
        sans: ['Poppins', 'sans-serif'],
        cursive: ['Covered By Your Grace', 'cursive'], 
      }
    },
  },
  plugins: [],
}