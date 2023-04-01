
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "bg":"#FFAB08",
        "title":"#FF5C00",
        "logo":"#FF7020",
        
      },
      width:{
        "container":"90%"
      },
      height:{
        "25":"250px"
      },
      gridTemplateColumns:{
        fluid:"repeat(auto-fill, 270px);",
        fluimd:" repeat(auto-fill, minmax(205px, 1fr));",
      },
      keyframes:{
        wiggle:{
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.5)' },
        }
      },
      animation:{
        wiggle:" wiggle .7s ease-in-out infinite"
      },
    
    },
  
  },
  plugins: [],
}