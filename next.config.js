const path = require('path')
const removeImports = require('next-remove-imports')()

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = (phase, { defaultConfig }) => {
  return removeImports({
    ...defaultConfig
  })
}
