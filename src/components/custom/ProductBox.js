'use client'

import Image from 'next/image'

const ProductBox = () => {
  return (
    <div className='relative w-full h-0 pb-[100%] z-8 cursor-pointer'>
      <Image
        src='/images/min2.jpg' // ispravna putanja
        alt='Opis slike'
        width={5000} // postavite na željenu širinu
        height={5000} // postavite na željenu visinu
        className='absolute inset-0 w-full h-full object-cover ' // ili object-cover
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
          Verenicki prsten sa dijamantom
        </h5>
        <div
          className='text-[2rem] tracking-tight xl:text-[2.5rem]'
          style={{ fontFamily: 'var(--font-lato)' }}
        >
          15,000 din
        </div>
      </div>
    </div>
  )
}

export default ProductBox
