module.exports = {

    plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': 'postcss-nested',
        tailwindcss: {},
        autoprefixer: {},
        'postcss-minify':{},
      }
    // plugins: [
    //     require('tailwindcss'),
    //     require('postcss-import'),
    //     require('postcss-nested'),
    //     // require('postcss-minify'),
    //     require('autoprefixer')
    // ]
    }