module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      navy: {
        DEFAULT: '#003049',
      },
      red: {
        DEFAULT: '#d62828',
      },
      orange: {
        DEFAULT: '#f77f00',
      },
      yellow: {
        DEFAULT: '#fcbf49'
      },
      ocher: {
        DEFAULT: '#eae2b7'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
