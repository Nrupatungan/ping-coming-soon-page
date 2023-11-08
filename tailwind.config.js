/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/app/js/script.js", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      // Primary
      Blue: 'hsl(223, 87%, 63%)',
      Hover_Blue: '#88a4ec',
      
      // Secondary
      Pale_Blue: 'hsl(223, 100%, 88%)',
      Light_Red: 'hsl(354, 100%, 66%)',
      
      // Neutral
      Gray: 'hsl(0, 0%, 59%)',
      Very_Dark_Blue: 'hsl(209, 33%, 12%)'
      },
    },

    fontFamily: {
      Libre: "'Libre Franklin', sans-serif",
    },

    screens: {
      'tablet': '600px',
    }
  },
  plugins: [],
}

