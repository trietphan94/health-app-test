/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#FFCC21',
          400: '#FF963C',
          500: '#EA6C00',
        },
        secondary: {
          300: '#8FE9D0',
        },
        dark: {
          500: '#414141',
          600: '#2E2E2E',
        },
        gray: {
          400: '#777777'
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        notoSansJP: ['Noto Sans JP', 'sans-serif'],
        sans: ['Inter', 'sans-serif']
      },
      fontSize: {
        xxs: ['11px', '16px'],
        xs: ['12px', '17px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      textShadow: {
        default: '0px 0px 6px #FCA500'
      },

    }
  },
  plugins: [],
}
