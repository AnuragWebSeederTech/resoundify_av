/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Or 'Poppins', 'sans-serif'
      },
      keyframes: {
        'sweep-in': { // Existing for HeroSection
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-left': { // New for WhatResoundifyDoes text
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': { // New for WhatResoundifyDoes image
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'sweep-in-1': 'sweep-in 0.8s ease-out forwards',
        'sweep-in-2': 'sweep-in 0.8s ease-out 0.2s forwards',
        'sweep-in-3': 'sweep-in 0.8s ease-out 0.4s forwards',
        'slide-in-left-1': 'slide-in-left 0.8s ease-out forwards',
        'slide-in-left-2': 'slide-in-left 0.8s ease-out 0.3s forwards', // Staggered
        'slide-in-left-3': 'slide-in-left 0.8s ease-out 0.6s forwards', // Staggered
        'slide-in-right-1': 'slide-in-right 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}