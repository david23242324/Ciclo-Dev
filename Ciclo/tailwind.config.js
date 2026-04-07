/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { borderColor: '#111111' },
          '50%':      { borderColor: 'transparent' },
        },
      },
      animation: {
        'blink': 'blink 0.75s step-end infinite',
      },
    },
  },
  plugins: [],
}