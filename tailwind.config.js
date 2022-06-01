module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./index.html"
  ],
  theme: {
    extend: {
      colors:{
        thema: '#373737'
      },
      

      fontFamily : {
        lob : ['Playfair Display' , 'serif']
      },
      screens: {
        '2xl': {'max': '2535px'},
        // => @media (max-width: 2535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'min': '767px'},
        // => @media (min-width: 767px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
}
