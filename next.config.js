/** @type {import('next').NextConfig} */

const apiUri = process.env.TTS_API_URL;

const nextConfig = {
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${apiUri}/:path*`,
        basePath: false
      }
    ];
  }
};

module.exports = nextConfig;
