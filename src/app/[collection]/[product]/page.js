import Main from '@/components/layout/Main'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import Footer from '@/components/custom/Footer'
import SpaceFromTop from '@/components/custom/SpaceFromTop'
import ProductBox from '@/components/custom/ProductBox'
import { wixServer } from '@/lib/wixServer'
import { notFound } from 'next/navigation'
import { ProductLandingSection } from '@/components/custom/Product'

async function getProductData(collectionSlug, productSlug) {
  const wixClient = await wixServer()

  const { items: productItems } = await wixClient.products
    .queryProducts()
    .eq('slug', productSlug)
    .find()

  const getCollection = await wixClient.collections.getCollectionBySlug(
    collectionSlug
  )

  const { items: similarProducts } = await wixClient.products
    .queryProducts()
    .eq('collectionIds', getCollection.collection._id)
    .limit(6)
    .find()

  const getRecommendedCollection =
    await wixClient.collections.getCollectionBySlug('recommended')

  const { items: recommended } = await wixClient.products
    .queryProducts()
    .eq('collectionIds', getRecommendedCollection.collection._id)
    .find()

  return {
    product: productItems[0],
    collection: getCollection.collection,
    similarProducts,
    recommended,
  }
}

export async function generateMetadata({ params }) {
  const { product } = await getProductData(params.collection, params.product)

  if (!product) return {}

  return {
    title: `${product.name}`,
    description:
      product.description ||
      `Otkrijte jedinstveni nakit ${product.name} iz Alex Zlatara kolekcije. Ručno izrađen i pažljivo osmišljen nakit za svaki trenutak.`,
    openGraph: {
      title: `${product.name} - Alex Zlatara`,
      description:
        product.description ||
        `Otkrijte jedinstveni nakit ${product.name} iz Alex Zlatara kolekcije. Ručno izrađen i pažljivo osmišljen nakit za svaki trenutak.`,
      url: `https://alexzlatara.com/${params.collection}/${params.product}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} - Alex Zlatara`,
      description:
        product.description ||
        `Otkrijte jedinstveni nakit ${product.name} iz Alex Zlatara kolekcije. Ručno izrađen i pažljivo osmišljen nakit za svaki trenutak.`,
    },
  }
}

const Product = async ({ params }) => {
  const collection = params.collection
  const product = params.product

  const wixClient = await wixServer()

  const { items } = await wixClient.products
    .queryProducts()
    .eq('slug', product)
    .find()

  const getCollection = await wixClient.collections.getCollectionBySlug(
    collection
  )

  const { items: similiar } = await wixClient.products
    .queryProducts()
    .eq('collectionIds', getCollection.collection._id)
    .limit(6)
    .find()

  const item = items[0]
  const images =
    item && item.media.items ? item.media.items.map((img) => img.image.url) : []

  const getRecommendedCollection =
    await wixClient.collections.getCollectionBySlug('recommended')

  const { items: recommended } = await wixClient.products
    .queryProducts()
    .eq('collectionIds', getRecommendedCollection.collection._id)
    .find()

  if (!item) {
    return notFound()
  }

  return (
    <Main navBg={'#fff'}>
      <SpaceFromTop />
      <div className='px-[1.5rem] md:px-[2rem] lg:px-[4rem] xl:px-[4rem] 2xl:px-[4rem]'>
        <BreadCrumbSection collection={collection} product={product} />
        <ProductLandingSection item={item} images={images} />
        {/* preporuceni fetch */}
        <CarouselSection recommended={similiar} collection={collection} />
        {/* recommended fetch */}
        <CarouselSectionRecommend recommended={recommended} />
      </div>

      <Footer />
    </Main>
  )
}

export default Product

const CarouselSection = ({ recommended, collection }) => {
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
          {recommended &&
            recommended.map((item, index) => (
              <CarouselItem
                key={index}
                className='pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/4 '
              >
                <ProductBox
                  price={false}
                  title={item.name}
                  priceData={item.priceData.price}
                  image={item.media.mainMedia.image}
                  slug={item.slug}
                  collection={collection}
                  gallery={item.media.items}
                />
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

const CarouselSectionRecommend = ({ recommended }) => {
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
          {recommended.map((item, index) => (
            <CarouselItem
              key={index}
              className='pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/4 '
            >
              <ProductBox
                price={false}
                title={item.name}
                priceData={item.priceData.price}
                image={item.media.mainMedia.image}
                slug={item.slug}
                collection={item.additionalInfoSections[4].title}
                gallery={item.media.items}
              />
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
