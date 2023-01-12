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
          sec1: '#0D7377',
          sec2: '#00ADB5',
          sec3: '#FF2E63',
          sec4: '#EEEEEE',
        },
        '2': {
          DEFAULT: '#3B5441',
          lightback: '#83E85A',
          sec1: '#2CB978',
          sec2: '#107A8B',
          sec3: '#0D7377',
          sec4: '#EEEEEE',
        }
      },
    },
  },
  plugins: [],
}
