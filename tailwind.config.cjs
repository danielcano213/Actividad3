/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#121212',
          100: '#1a1a1a',
          200: '#222222',
          300: '#2a2a2a',
          400: '#333333',
          500: '#3a3a3a',
          600: '#444444',
        },
        secondary: {
          50: '#0d0d0d',
          100: '#141414',
          500: '#1f1f1f',
          600: '#262626',
        },
        neutral: {
          50: '#1a1a1a',
          100: '#2e2e2e',
          200: '#404040',
          400: '#595959',
          600: '#737373',
          800: '#a3a3a3',
        },
        white: '#ffffff',
        black: '#000000',
      },
      boxShadow: {
        soft: '0 4px 6px -1px rgba(255, 255, 255, 0.05)',
        glow: '0 0 10px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}
