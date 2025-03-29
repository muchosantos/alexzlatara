export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/cart', '/search', '/api'],
      },
    ],
    sitemap: 'https://alexzlatara.com/sitemap.xml',
    host: 'https://alexzlatara.com',
  }
}
