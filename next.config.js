const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const isIOS =
  typeof navigator !== 'undefined' && /iPhone/.test(navigator.platform)
const isMAC =
  typeof navigator !== 'undefined' && /Macintosh/.test(navigator.platform)
module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV !== 'production' || isIOS || isMAC,
    dest: 'public',
    runtimeCaching,
  },
})
