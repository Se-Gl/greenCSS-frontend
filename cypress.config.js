const { defineConfig } = require('cypress')

module.exports = defineConfig({
  trashAssetsBeforeRuns: true,
  baseUrl: 'http://localhost:3000',
  env: {
    codeCoverage: {
      url: '/api/__coverage__'
    }
  }
})
