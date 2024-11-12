'use client'

import Image from 'next/image'
import Link from 'next/link'

const ProductBox = ({
  price,
  title,
  priceData,
  image,
  slug,
  collection,
  gallery,
}) => {
  function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <div className='relative w-full h-0 pb-[100%] z-8 cursor-pointer'>
      <Link href={`/${collection}/${slug}`}>
        <Image
          src={image.url}
          alt={title}
          width={5000}
          height={5000}
          className='absolute inset-0 w-full h-full object-cover '
        />

        {/* {ifGalleryImagesExist && (
              <div className='absolute h-full w-full grid place-content-center'>
                <Image
                  src={
                    product.galleryImages.nodes[0]?.mediaItemUrl ||
                    '/fallback-image.jpg'
                  } // Dodaj fallback sliku
                  alt={product.name || 'Product Gallery Image'}
                  fill
                  sizes='(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
                />
              </div>
            )} */}

        <div className='absolute bottom-3 left-4'>
          <h5
            className='font-regular uppercase text-[1rem] tracking-tight'
            style={{ fontFamily: 'var(--font-lato)' }}
          >
            {title}
          </h5>
          {price && (
            <div
              className='text-[2rem] tracking-tight xl:text-[2.5rem]'
              style={{ fontFamily: 'var(--font-lato)' }}
            >
              {formatPrice(priceData)} din
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}

export default ProductBox
