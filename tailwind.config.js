/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'prompt': ['Prompt', 'sans-serif'],
        'monospace': ['Monospace', 'sans-serif'],
      },
      keyframes: {
        'opacity-increase': {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.3' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },

      },
      animation: {
        opacity: 'opacity-increase 0.4s ease-out forwards',
        'slide-up': 'slide-up 1.0s ease-out forwards',
        'slide-down': 'slide-down 1.0s ease-out forwards',
      },
    },
  },
  plugins: [],
}
