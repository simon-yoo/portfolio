/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        browny: '#403d39',
        d_color: '#faf8f1',
      },
    },
  },
  plugins: [],
}
