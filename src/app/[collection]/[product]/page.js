import Main from '@/components/layout/Main'

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

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import Footer from '@/components/custom/Footer'
import SpaceFromTop from '@/components/custom/SpaceFromTop'
import Image from 'next/image'
import ProductBox from '@/components/custom/ProductBox'
import { wixServer } from '@/lib/wixServer'

const Product = async ({ params }) => {
  const collection = params.collection
  const product = params.product

  const wixClient = await wixServer()

  const { items } = await wixClient.products
    .queryProducts()
    .eq('slug', product)
    .find()

  const item = items[0]

  console.log(item)

  return (
    <Main navBg={'#fff'}>
      <SpaceFromTop />
      {/* <div className='px-[1.5rem] md:px-[2rem] lg:px-[4rem] xl:px-[4rem] 2xl:px-[4rem]'>
        <BreadCrumbSection collection={collection} product={product} />
        <ProductLandingSection />
        <CarouselSection />
        <CarouselSectionRecommend />
      </div> */}

      <Footer />
    </Main>
  )
}

export default Product

const ProductLandingSection = () => {
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
          <CarouselItem>
            <div className='bg-slate-50 h-[50vh] xl:h-[76vh] 2xl:h-[76vh] mb-[2rem] cursor-pointer'>
              <Image
                src='/images/min3.jpg' // ispravna putanja
                alt='Opis slike'
                width={5000} // postavite na željenu širinu
                height={5000} // postavite na željenu visinu
                className='w-full h-full object-cover' // ili object-cover
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className='bg-slate-100 h-[50vh] xl:h-[76vh] 2xl:h-[76vh] mb-[2rem] cursor-pointer'>
              <Image
                src='/images/min2.jpg' // ispravna putanja
                alt='Opis slike'
                width={5000} // postavite na željenu širinu
                height={5000} // postavite na željenu visinu
                className='w-full h-full object-cover' // ili object-cover
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className='bg-slate-200 h-[50vh] xl:h-[76vh] 2xl:h-[76vh] mb-[2rem] cursor-pointer'>
              <Image
                src='/images/min.jpg' // ispravna putanja
                alt='Opis slike'
                width={5000} // postavite na željenu širinu
                height={5000} // postavite na željenu visinu
                className='w-full h-full object-cover' // ili object-cover
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious />
          <CarouselNext /> */}
      </Carousel>
      <div className='mb-[2rem]'>
        <h2
          className='text-[1.2rem] font-medium md:text-[2.5rem] lg:text-[1.5rem] xl:text-[2rem] 2xl:text-[2.5rem] tracking-tighter'
          style={{ fontFamily: 'var(--font-lato)' }}
        >
          Pulse mono hoop
        </h2>
        <span
          className='text-[.9rem] text-gray-600 block md:text-[1.2rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem]'
          style={{ fontFamily: 'var(--font-lato)' }}
        >
          white gold and diamond
        </span>
        <span
          className='mt-[.75rem] block text-[1.1rem] lg:text-[1.1rem] xl:text-[1.3rem] 2xl:text-[1.4rem]'
          style={{ fontFamily: 'var(--font-lato)' }}
        >
          $1900
        </span>
        {/* jedna reusable komponenta */}

        <div className='my-[2rem]'>
          <button
            className='bg-black text-white w-[100%] py-4 uppercase rounded-2xl'
            style={{ fontFamily: 'var(--font-lato)' }}
          >
            DODAJTE U KORPU
          </button>
          <button
            className='border border-gray-600 text-black w-[100%] py-4 mt-[1rem] uppercase rounded-2xl'
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

        <AccordionSection />
      </div>
    </div>
  )
}

const ProductGarantySection = () => {
  const data = [
    'Garanty: 3 years',
    'Free shipment',
    '30 days for exchange and returns',
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

const AccordionSection = () => {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger style={{ fontFamily: 'var(--font-lato)' }}>
          Details
        </AccordionTrigger>
        <AccordionContent style={{ fontFamily: 'var(--font-lato)' }}>
          Pulse mono hoop in 18k white gold set with diamonds. Thanks to an
          ingenious, versatile clasp, the Pulse mono-boucle créole can be worn
          in two ways: as a clip or as an earring.
        </AccordionContent>
        <AccordionContent style={{ fontFamily: 'var(--font-lato)' }}>
          A white gold jewel punctuated with diamonds, it dresses up the ear and
          enhances the look. This piece is sold individually.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger style={{ fontFamily: 'var(--font-lato)' }}>
          Composition and Care
        </AccordionTrigger>
        <AccordionContent style={{ fontFamily: 'var(--font-lato)' }}>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger style={{ fontFamily: 'var(--font-lato)' }}>
          Delivery and returns
        </AccordionTrigger>
        <AccordionContent style={{ fontFamily: 'var(--font-lato)' }}>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

const CarouselSection = () => {
  return (
    <div className='my-[5rem] relative'>
      <span
        className='text-[1.4rem] font-semibold block my-[2rem]'
        style={{ fontFamily: 'var(--font-lato)' }}
      >
        SLIČNI PROIZVODI
      </span>
      <Carousel className='w-full'>
        <CarouselContent className='-ml-1'>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className='pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/4 '
            >
              <ProductBox />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='absolute top-[-3.2rem] right-[3rem]'>
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  )
}

const CarouselSectionRecommend = () => {
  return (
    <div className='my-[5rem] relative'>
      <span
        className='text-[1.4rem] font-semibold block my-[2rem]'
        style={{ fontFamily: 'var(--font-lato)' }}
      >
        PREPORUČUJEMO
      </span>
      <Carousel className='w-full'>
        <CarouselContent className='-ml-1'>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className='pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/4 '
            >
              <ProductBox />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='absolute top-[-3.2rem] right-[3rem]'>
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  )
}

const BreadCrumbSection = ({ collection, product }) => {
  return (
    <Breadcrumb className='mb-5'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>
            <span
              className='uppercase text-[.65rem] text-[#000000c0] hover:border-b hover:border-white border-transparent transition-colors duration-300'
              style={{ fontFamily: 'var(--font-lato)' }}
            >
              Početna
            </span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className='text-[#00000084]' />
        <BreadcrumbItem>
          <BreadcrumbLink href={`/${collection}`}>
            <span
              className='uppercase text-[.65rem]  text-[#000000c0]'
              style={{ fontFamily: 'var(--font-lato)' }}
            >
              {collection}
            </span>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className='text-[#00000084]' />
        <BreadcrumbItem>
          <BreadcrumbLink href={`/${product}`}>
            <span
              className='uppercase text-[.65rem]  text-[#00000084]'
              style={{ fontFamily: 'var(--font-lato)' }}
            >
              {product}
            </span>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
