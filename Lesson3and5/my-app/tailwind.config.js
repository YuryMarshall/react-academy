/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'user-black': '#333131',
      'user-pink': '#ff6bbc',
      'user-green': '#9effb8',
    },
    boxShadow: {
      'user-shadow': '10px 5px 5px red',
      'user-shadow2': '20px 5px 5px blue',
    },
    extend: {},
  },
  plugins: [],
};
