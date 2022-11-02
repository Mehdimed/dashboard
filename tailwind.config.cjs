/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'navbar': '#d8d8d8',
        'dark-navbar': '#1C1B22',
        'firefox': '#f4f4f4',
        'dark-firefox': '#2b2a33',
        'dark': '#2b2a33',
        'light': '#f5f5f5',
        'input' : '#999999',
        'dark-input' : '#4b5563',
      },
      boxShadow: {
        'null': '0 0 0 0 rgba(0, 0, 0, 0)',
      },
      animation: {
        'vibrate': 'vibrate 1s ease-in-out',
        'vibrate-open': 'vibrate-open 1s ease-in-out',
        'rise': 'rise 1s ease-in-out forwards',
        'set': 'set 1s ease-in-out forwards',
      },
      keyframes: {
        'vibrate': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'rotate(-5deg)' },
          '20%, 40%, 60%, 80%': { transform: 'rotate(5deg)' },
        },
        'vibrate-open': {
          '0%, 100%': { transform: 'rotate(0deg) translateX(-4rem)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'rotate(-5deg) translateX(-4rem)' },
          '20%, 40%, 60%, 80%': { transform: 'rotate(5deg) translateX(-4rem)' },
        },
        'rise': {
          '0%': { 
            'transform-origin': '50% 50px',
            transform: 'rotate(180deg)',
            opacity: 0,
         },
         '40%': {
          opacity: 0,
         },
          '100%': { 
            'transform-origin': '50% 50px',
            transform: 'rotate(360deg)',
            opacity: 1,
           },
        },
        'set': {
          '0%': { 
            'transform-origin': '50% 50px',
            transform: 'rotate(0deg)',
            opacity: 1,
         },
         '60%': {
          opacity: 0,
         },
          '100%': { 
            'transform-origin': '50% 50px',
            transform: 'rotate(180deg)',
            opacity: 0,
           },
        },
      },
    },
  },
  plugins: [],
}
