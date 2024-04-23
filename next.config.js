/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['localhost', 'microdiving.vercel.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: ''
      }
    ]
  }
};

module.exports = nextConfig;
