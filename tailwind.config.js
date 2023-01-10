/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '1': {
          DEFAULT: '#222831',
          lightback: '#393E46',
          sec1: '#00ADB5',
          sec2: '#FF2E63',
          sec3: '#EEEEEE',
        }
      },
    },
  },
  plugins: [],
}
