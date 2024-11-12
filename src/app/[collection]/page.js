import CollectionBaner from '@/components/custom/CollectionBaner'
import Filters from '@/components/custom/Filters'
import Footer from '@/components/custom/Footer'
import Products from '@/components/custom/Products'
import SpaceFromTop from '@/components/custom/SpaceFromTop'
import Main from '@/components/layout/Main'
import { wixServer } from '@/lib/wixServer'

export default async function Collection({ params }) {
  const collection = params.collection

  const wixClient = await wixServer()

  const getCollection = await wixClient.collections.getCollectionBySlug(
    collection
  )

  let productsQuery = wixClient.products
    .queryProducts()
    .eq('collectionIds', getCollection.collection._id)

  const { items: products } = await productsQuery.find()

  const length = products.length

  return (
    <Main navBg={'#fff'}>
      <SpaceFromTop />
      <CollectionBaner collection={collection} />
      <Filters length={length} />
      <Products products={products} collection={collection} />

      <Footer />
    </Main>
  )
}
