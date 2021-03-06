module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {
        button: '2px 2px 4px rgba(0, 0, 0, 0.25)',
      },
      spacing: {
        100: '30rem',
      },
    },
    fontFamily: {
      ubuntu: ['Ubuntu'],
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
