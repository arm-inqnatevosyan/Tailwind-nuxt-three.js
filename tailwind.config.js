/** @type {import('tailwindcss').Config} */
module.exports = {
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
        '2x': '80vh',
        '2xx': '100vh'
      },
      margin: {
        '2x': '800px',
        '2xx': '1200px'
      },
      screens: {
        'sms': '350px'
      },
      fontFamily: {
        Rampart: ["Rampart One", "cursive"],
      }
    }
  },
  plugins: [require('tw-elements/dist/plugin')]
}
