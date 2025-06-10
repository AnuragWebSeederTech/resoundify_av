// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Or 'Poppins', 'sans-serif' if you prefer
      },
      keyframes: {
        'sweep-in': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'sweep-in-1': 'sweep-in 0.8s ease-out forwards',
        'sweep-in-2': 'sweep-in 0.8s ease-out 0.2s forwards', // Staggered delay for description
        'sweep-in-3': 'sweep-in 0.8s ease-out 0.4s forwards', // For optional button
      },
    },
  },
  plugins: [],
}