import CollectionBaner from '@/components/custom/CollectionBaner'
import Filters from '@/components/custom/Filters'
import Footer from '@/components/custom/Footer'
import Products from '@/components/custom/Products'
import SpaceFromTop from '@/components/custom/SpaceFromTop'
import Main from '@/components/layout/Main'

export default function Collection({ params }) {
  const collection = params.collection
  return (
    <Main navBg={'#fff'}>
      <SpaceFromTop />
      <CollectionBaner collection={collection} />
      <Filters />
      <Products />

      <Footer />
    </Main>
  )
}
