import { wixServer } from '@/lib/wixServer'

export default async function sitemap() {
  const wixClient = await wixServer()

  const collections = await wixClient.collections.queryCollections().find()

  // ✅ Izbacujemo all-products kolekciju ako postoji u CMS-u
  const filteredCollections = collections.items.filter(
    (c) => c.slug !== 'all-products'
  )

  const collectionUrls = filteredCollections.map((collection) => ({
    url: `https://alexzlatara.com/${collection.slug}`,
    lastModified: new Date().toISOString(),
  }))

  const productUrlsPromises = filteredCollections.map(async (collection) => {
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
