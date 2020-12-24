const withPWA = require('next-pwa')
// Removed api cache strategy
const runtimeCaching = require('./cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})
