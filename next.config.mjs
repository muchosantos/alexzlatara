/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // protocol: 'http',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/burma-m17',
        destination: '/burme/burma-m17',
        permanent: true,
      },
      {
        source: '/product-page/alke-mindjuse-sa-cirkonima',
        destination: '/mindjuse/alke-mindjuse-sa-cirkonima',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
