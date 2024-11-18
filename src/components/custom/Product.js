'use client'

import { formatPrice, removeHTMLTags } from '@/helpers'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useCart } from '@/context/cart'
import { useMenuContext } from '@/context/menus'

export const ProductLandingSection = ({ item, images }) => {
  const { addToCart } = useCart()
  const { setOpenCart } = useMenuContext()

  const handleAddToCart = () => {
    addToCart(item)
    setOpenCart(true)
  }

  return (
    <div className='lg:grid lg:grid-cols-[60%_38%] lg:gap-[1rem] lg:justify-between xl:grid xl:grid-cols-[60%_38%] xl:gap-[1rem] xl:justify-between 2xl:grid 2xl:grid-cols-[60%_38%] 2xl:gap-[1rem] 2xl:justify-between'>
      {/* <div className='bg-slate-50 h-[50vh] mb-[2rem]'></div> */}
      {/* dodaj zoom, odradi sticky na  vecim ekranima */}
      <Carousel>
        <div className='absolute top-[3rem] left-[5rem] z-20'>
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <CarouselContent>
          {Object.keys(images).length > 1 ? (
            <>
              {images.map((image, i) => (
                <CarouselItem key={i}>
                  <div className='bg-slate-50 h-[50vh] xl:h-[76vh] 2xl:h-[76vh] mb-[2rem] cursor-pointer'>
                    <Image
                      src={image} // ispravna putanja
                      alt='Opis slike'
                      width={5000} // postavite na željenu širinu
                      height={5000} // postavite na željenu visinu
                      className='w-full h-full object-cover' // ili object-cover
                    />
                  </div>
                </CarouselItem>
              ))}
            </>
          ) : (
            <CarouselItem>
              <div className='bg-slate-50 h-[50vh] xl:h-[76vh] 2xl:h-[76vh] mb-[2rem] cursor-pointer'>
                <Image
                  src={images[1]} // ispravna putanja
                  alt='Opis slike'
                  width={5000} // postavite na željenu širinu
                  height={5000} // postavite na željenu visinu
                  className='w-full h-full object-cover' // ili object-cover
                />
              </div>
            </CarouselItem>
          )}
        </CarouselContent>
        {/* <CarouselPrevious />
            <CarouselNext /> */}
      </Carousel>
      <div className='mb-[2rem]'>
        <h2
          className='text-[1.2rem] font-medium md:text-[2.5rem] lg:text-[1.5rem] xl:text-[2rem] 2xl:text-[2.5rem] tracking-tighter'
          style={{ fontFamily: 'var(--font-lato)' }}
        >
          {item.name}
        </h2>
        <span
          className='text-[.9rem] text-gray-600 block md:text-[1.2rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem]'
          style={{ fontFamily: 'var(--font-lato)' }}
        >
          {removeHTMLTags(item.additionalInfoSections[3].description)}
        </span>
        <span
          className='mt-[.75rem] block text-[1.1rem] lg:text-[1.1rem] xl:text-[1.3rem] 2xl:text-[1.4rem]'
          style={{ fontFamily: 'var(--font-lato)' }}
        >
          {formatPrice(item.priceData.price)},00 RSD
        </span>
        {/* jedna reusable komponenta */}

        <div className='my-[2rem]'>
          <button
            className='bg-black text-white w-[100%] py-4 uppercase rounded-[5rem]'
            style={{ fontFamily: 'var(--font-lato)' }}
            onClick={() => handleAddToCart(item)}
          >
            DODAJTE U KORPU
          </button>
          <button
            className='border border-gray-600 text-black w-[100%] py-4 mt-[1rem] uppercase rounded-[5rem]'
            style={{ fontFamily: 'var(--font-lato)' }}
          >
            KUPITE ODMAH
          </button>
        </div>
        <ProductGarantySection />

        <div
          className='text-[0.7rem] text-gray-400 my-[1rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1rem]'
          style={{ fontFamily: 'var(--font-lato)' }}
        >
          SKU:PE-01-DAER-41
        </div>

        <AccordionSection item={item} />
      </div>
    </div>
  )
}

export const ProductGarantySection = () => {
  const data = [
    'Garancija: 3 godine',
    'Besplatna poštarina',
    '30 dana povraćaja i zamene',
  ]

  return (
    <div className='my-[2rem]'>
      {data.map((item, i) => (
        <li
          className='text-[.8rem] font-semibold my-[.5rem] underline'
          key={i}
          style={{ fontFamily: 'var(--font-lato)' }}
        >
          {item}
        </li>
      ))}
    </div>
  )
}

export const AccordionSection = ({ item }) => {
  const { additionalInfoSections } = item

  function capitalizeFirstLetter(title) {
    return title.charAt(0).toUpperCase() + title.slice(1)
  }

  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger style={{ fontFamily: 'var(--font-lato)' }}>
          {capitalizeFirstLetter(additionalInfoSections[0].title)}
        </AccordionTrigger>
        <AccordionContent style={{ fontFamily: 'var(--font-lato)' }}>
          {removeHTMLTags(additionalInfoSections[0].description)}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger style={{ fontFamily: 'var(--font-lato)' }}>
          {capitalizeFirstLetter(additionalInfoSections[1].title)}
        </AccordionTrigger>
        <AccordionContent style={{ fontFamily: 'var(--font-lato)' }}>
          {removeHTMLTags(additionalInfoSections[1].description)}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger style={{ fontFamily: 'var(--font-lato)' }}>
          {capitalizeFirstLetter(additionalInfoSections[2].title)}
        </AccordionTrigger>
        <AccordionContent style={{ fontFamily: 'var(--font-lato)' }}>
          {removeHTMLTags(additionalInfoSections[2].description)}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
