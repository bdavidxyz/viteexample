// const purgecss = require('@fullhuman/postcss-purgecss')

let purgecss = () => {}

if (process.env.NODE_ENV !== 'development') {
   purgecss = require('@fullhuman/postcss-purgecss')
}

module.exports = {
  plugins: [
    purgecss({
      content: ['./**/*.html']
    })
  ]
}
