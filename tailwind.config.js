/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00ffff',
        'accent-teal': '#49c5b6',
        'accent-purple': '#b39ddb',
        'accent-yellow': '#ffca28',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.1)',
        'inner-md': 'inset 0 4px 6px rgba(0,0,0,0.1)',
      },
      backgroundImage: {
        'accent-teal': 'linear-gradient(90deg, #00bcd4, #49c5b6)',
        'accent-purple': 'linear-gradient(90deg, #7e57c2, #b39ddb)',
        'accent-yellow': 'linear-gradient(90deg, #ffca28, #ffa726)',
      },
      animation: {
        'neon-pulse': 'neon-pulse 1.5s infinite alternate',
      },
      keyframes: {
        'neon-pulse': {
          '0%': {
            textShadow:
              '0 0 7px #00ffff, 0 0 10px #00ffff, 0 0 21px #00ffff, 0 0 42px #0fa',
          },
          '100%': {
            textShadow:
              '0 0 7px #00ffff, 0 0 10px #00ffff, 0 0 21px #00ffff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '5px',
        md: '10px',
        lg: '20px',
      },
    },
  },
  plugins: [],
}
