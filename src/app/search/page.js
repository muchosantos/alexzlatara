import CollectionBaner from '@/components/custom/CollectionBaner'
import Filters from '@/components/custom/Filters'
import Footer from '@/components/custom/Footer'
import Products from '@/components/custom/Products'
import SpaceFromTop from '@/components/custom/SpaceFromTop'
import Main from '@/components/layout/Main'
import { wixServer } from '@/lib/wixServer'

const Search = async (params) => {
  const input = params.searchParams.keyword

  const wixClient = await wixServer()

  let productsQuery = wixClient.products.queryProducts()
  if (input) {
    productsQuery = productsQuery
      .contains('description', input)
      .contains('name', input)
  }

  const { items: products } = await productsQuery.find()

  const length = products.length

  return (
    <Main navBg={'#fff'}>
      <SpaceFromTop />
      <CollectionBaner
        collection={`Pretraga`}
        search={true}
        searchedKeyword={input}
      />
      <Filters length={length} />

      {length === 0 && (
        <div className='my-[5rem] mx-[1.5rem] md:mx-[2rem] lg:mx-[4rem]'>
          <span style={{ fontFamily: 'var(--font-lato)', fontSize: '2rem' }}>
            Nema rezultata vaše pretrage. <br />
            Pokušajte ponovo.
          </span>
        </div>
      )}

      {length !== 0 && <Products products={products} collection={'search'} />}

      <Footer />
    </Main>
  )
}

export default Search
