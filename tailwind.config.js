/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0C182C',
        'brand-deepred': '#BB342F',
        'brand-cyan': '#34F6F2',
        'brand-peach': '#FFE2D1',
        'brand-brightred': '#F8333C',
        'dirtywhite': '#FAFAFA',
      },
    },
  },
  plugins: [],
};
