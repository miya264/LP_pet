/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF3E0',
        'green-light': '#A3C9A8',
        'green-dark': '#8AB58F',
        'brown-100': '#F5EEE0',
        'brown-200': '#E8DCC8',
        'brown-300': '#D1BEA9',
        'brown-400': '#AA9782',
        'brown-900': '#695E54',
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
        rounded: ['"M PLUS Rounded 1c"', 'sans-serif'],
        handwritten: ['"Klee One"', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 1s cubic-bezier(0.23, 1, 0.32, 1)',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
        'slide-down': 'slideDown 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
        'scale-in': 'scaleIn 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      boxShadow: {
        'soft': '0 8px 20px rgba(156, 139, 122, 0.08)',
        'hover': '0 15px 30px rgba(156, 139, 122, 0.15)',
      },
    },
  },
  plugins: [],
};