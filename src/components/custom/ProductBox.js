'use client'

import { formatPrice } from '@/helpers'
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
  // console.log(`Gallery ovogg itema - ${title}`, gallery)
  const secondImage = gallery?.[1]?.image?.url

  const styleIfGalleryImagesExist =
    'absolute z-10 hover:opacity-0 transition-opacity ease-in-out duration-500 w-full h-full object-cover'

  const styleIfDoesntExist = 'absolute inset-0 w-full h-full object-cover'

  return (
    <div className='relative w-full h-0 pb-[100%] z-8 cursor-pointer'>
      <Link href={`/${collection}/${slug}`}>
        <Image
          src={image.url}
          alt={title}
          width={5000}
          height={5000}
          className={
            secondImage ? styleIfGalleryImagesExist : styleIfDoesntExist
          }
        />

        {secondImage && (
          <div className='absolute h-full w-full grid place-content-center'>
            <Image
              src={secondImage}
              alt={title}
              width={5000}
              height={5000}
              className='absolute inset-0 w-full h-full object-cover'
            />
          </div>
        )}

        <div className='absolute bottom-3 left-4 z-40'>
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
              {formatPrice(priceData)},00 RSD
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}

export default ProductBox
