/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'navbar': '#1C1B22',
        'firefox': '#2b2a33',
      },
      animation: {
        'vibrate': 'vibrate 1s ease-in-out',
        'vibrate-open': 'vibrate-open 1s ease-in-out',
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
        }
      },
    },
  },
  plugins: [],
}
