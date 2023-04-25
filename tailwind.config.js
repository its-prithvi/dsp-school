/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#00235B',
        'primaryDark': '#393646',
        'calander': '#6f48eb',
        'yellow': '#2E4F4F',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'link': '#B0DAFF',
        'event': '#EBB02D',
      },
    },
  },
  plugins: [],
}