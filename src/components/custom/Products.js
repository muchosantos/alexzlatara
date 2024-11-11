'use client'

import ProductBox from './ProductBox'

// ovde ce naravno da se ubaci posle niz u params
// niz proizvoda, tako funkc
const Products = () => {
  return (
    <div className='my-[5rem] mx-[1.5rem] md:mx-[2rem] lg:mx-[4rem] grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 z-10'>
      {[
        0, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 4, 5, 6, 45, 6, 23, 5, 23, 5, 63, 46,
        3,
      ].map((item, i) => (
        <ProductBox key={i} />
      ))}
    </div>
  )
}

export default Products
