/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      width:{
        
        '506px': '506px' 
      },
      fontFamily:{
        Nunito:['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}

