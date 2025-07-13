// frontend/next.config.js
const BACKEND = process.env.BACKEND_URL || 'http://backend:4000'

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${BACKEND}/:path*`
      }
    ]
  }
}
