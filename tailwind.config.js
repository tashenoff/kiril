/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#0566AC',
        darkLight: '#0c162d',
        primarylight: '#1B90E3',
        lighten: '#53a1dd',
        secondary: '#A5D7DA',
        secondaryLight: '#ef238a',
        green: '#47E189',
        greenDark: '#42cf7e',
        black: '#333',
        white: '#fff',
        red: '#e045e6',
        gray: '#F4F4F4',
        blueLight: '#c3d9f6'
      },

      scale: ['hover', 'focus', 'group-hover'],
      transform: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}
