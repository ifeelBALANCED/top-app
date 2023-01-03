/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const pwa = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching
  }
})
const nextConfig = {
  ...pwa,
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    appDir: true,
    swcMinify: true,
    esmExternals: false,
    jsconfigPaths: true, // enables it for both jsconfig.json and tsconfig.json
    outputStandalone: true,
    allowMiddlewareResponseBody: true
  },
  images: {
    domains: ['icons8.com']
  }
}

module.exports = nextConfig
