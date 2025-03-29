import { wixServer } from '@/lib/wixServer'

export default async function sitemap() {
  const wixClient = await wixServer()

  const collections = await wixClient.collections.queryCollections().find()

  const collectionUrls = collections.items.map((collection) => ({
    url: `https://alexzlatara.com/${collection.slug}`,
    lastModified: new Date().toISOString(),
  }))

  const productUrlsPromises = collections.items.map(async (collection) => {
    const products = await wixClient.products
      .queryProducts()
      .eq('collectionIds', collection._id)
      .find()

    return products.items.map((product) => ({
      url: `https://alexzlatara.com/${collection.slug}/${product.slug}`,
      lastModified: new Date().toISOString(),
    }))
  })

  const productUrlsNested = await Promise.all(productUrlsPromises)
  const productUrls = productUrlsNested.flat()

  const staticUrls = [
    {
      url: 'https://alexzlatara.com/',
      lastModified: new Date().toISOString(),
    },
    {
      url: 'https://alexzlatara.com/o-nama',
      lastModified: new Date().toISOString(),
    },
    {
      url: 'https://alexzlatara.com/cart',
      lastModified: new Date().toISOString(),
    },
    {
      url: 'https://alexzlatara.com/search',
      lastModified: new Date().toISOString(),
    },
  ]

  return [...staticUrls, ...collectionUrls, ...productUrls]
}
