import CollectionBaner from '@/components/custom/CollectionBaner'
import Filters from '@/components/custom/Filters'
import Footer from '@/components/custom/Footer'
import Products from '@/components/custom/Products'
import SpaceFromTop from '@/components/custom/SpaceFromTop'
import Main from '@/components/layout/Main'
import { wixServer } from '@/lib/wixServer'

async function getCollectionData(collectionSlug) {
  const wixClient = await wixServer()
  const collectionData = await wixClient.collections.getCollectionBySlug(
    collectionSlug
  )

  const productsQuery = wixClient.products
    .queryProducts()
    .eq('collectionIds', collectionData.collection._id)

  const { items: products } = await productsQuery.find()

  return {
    collectionData,
    products,
  }
}

export async function generateMetadata({ params }) {
  const { collectionData } = await getCollectionData(params.collection)
  const collectionName = collectionData.collection.name

  return {
    title: `${collectionName}`,
    description: `Ekskluzivna kolekcija ${collectionName} iz ponude Alex Zlatara. Otkrijte ručno izrađeni zlatni i srebrni nakit za posebne trenutke.`,
    openGraph: {
      title: `${collectionName} - Alex Zlatara`,
      description: `Ekskluzivna kolekcija ${collectionName} iz ponude Alex Zlatara. Otkrijte ručno izrađeni zlatni i srebrni nakit za posebne trenutke.`,
      url: `https://alexzlatara.com/${params.collection}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${collectionName} - Alex Zlatara`,
      description: `Ekskluzivna kolekcija ${collectionName} iz ponude Alex Zlatara. Otkrijte ručno izrađeni zlatni i srebrni nakit za posebne trenutke.`,
    },
  }
}

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
