module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '380px',
      // => @media (min-width: 380px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      'barlow': ['Barlow Semi Condensed', 'sans-serif']
    },
    backgroundSize: {
      '10%': '10%',
      '20%': '20%',
      '30%': '30%',
      '40%': '40%',
      '50%': '50%',
      '60%': '60%',
      '70%': '70%',
      '80%': '80%',
      '90%': '90%'
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        }
      },
      
      
      boxShadow: {
          'shadowscissors' : 'inset 0px 5px 2px #D3D3D3, 0px 10px #CC9900',
          'shadowpaper' : 'inset 0px 5px 2px #D3D3D3, 0px 10px #2F55FF',
          'shadowrock' : 'inset 0px 5px 2px #D3D3D3, 0px 10px #BF4057',
          
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'triangle': "url('./assets/bg-triangle.svg')",

      }
    },
  },
  plugins: [],
}