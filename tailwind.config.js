/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './index-2.html'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
