/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue}',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 10px 2px'
      },
      height: {
        '2x': '80vh'
      }
    }
  },
  plugins: []
}
