const tailwindcssPostcss = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    tailwindcssPostcss(),
    autoprefixer(),
  ],
};
