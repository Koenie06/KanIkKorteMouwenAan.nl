/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'sofiaPro': ['SofiaProSemiBold', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial-ja': 'radial-gradient( #feebd1, #ebcea4)',
      }
    },
  },
  plugins: [],
}
