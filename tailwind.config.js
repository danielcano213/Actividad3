/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Times New Roman"', 'serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#A8D5BA',   // Verde pastel
          50: '#EAF7EF',
          100: '#D6F0DE',
          200: '#A8D5BA',
          300: '#81C5A1',
          400: '#5BB589',
          500: '#359570',
          600: '#26775B',
          700: '#185844',
          800: '#0A392D',
          900: '#001B17',
        },
        textcolor: {
          DEFAULT: '#1a1a1a', // Gris oscuro casi negro
        }
      },
    },
  },
  plugins: [],
}
