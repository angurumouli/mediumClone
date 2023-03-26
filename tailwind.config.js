/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Serif:
        [
          'Georgia,',
          'Garamond',
          ' Baskerville',
          'Cambria',
          'Palatino',
          'Bookman',
          'Times New Roman',
        ],
      mediumSerifItalic :['CharterItalic'],
      mediumSerif :['Charter']
    },
    extend: {},
  },
  plugins: [],
}
