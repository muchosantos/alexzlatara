'use client'

import ProductBox from './ProductBox'

// ovde ce naravno da se ubaci posle niz u params
// niz proizvoda, tako funkc
const Products = ({ products, collection }) => {
  return (
    <section className='my-[5rem] mx-[1.5rem] md:mx-[2rem] lg:mx-[4rem] grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 z-10'>
      {products.map((item, i) => (
        <ProductBox
          key={i}
          price={true}
          title={item.name}
          priceData={item.priceData.price}
          image={item.media.mainMedia.image}
          slug={item.slug}
          collection={collection}
          gallery={item.media.items}
        />
      ))}
    </section>
  )
}

export default Products
