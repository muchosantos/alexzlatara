'use client'

import { capitalizeFirstLetter, chooseDescription } from '@/helpers'
import Image from 'next/image'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../ui/breadcrumb'

const CollectionBaner = ({ collection, search, searchedKeyword, about }) => {
  const safeCollection =
    typeof collection === 'string' ? collection : 'default.jpg'

  // Formiraj putanju ka slici
  const imagePath = !about
    ? `/baners/${safeCollection}.jpg`
    : '/baners/onama.jpg'

  return (
    <div className='md:block lg:flex w-full justify-between h-[100%] relative'>
      <div className='lg:w-[35%] bg-[#006032] px-[2rem] py-[4rem] lg:px-[4rem] lg:pt-8 lg:pb-16 lg:flex flex-col justify-between'>
        {!search && <BreadCrumbSection collection={collection} />}

        {search && <BreadCrumbSection collection={''} />}

        <div>
          <h3
            className='mb-5 text-[3rem] text-white tracking-tighter'
            style={{ fontFamily: 'var(--font-lato)' }}
          >
            {' '}
            {capitalizeFirstLetter(
              collection === 'mindjuse' ? 'Mindjuše' : collection
            )}
          </h3>
          <p className='text-white' style={{ fontFamily: 'var(--font-lato)' }}>
            {!search && chooseDescription(collection)}
            {search && `Rezultati pretrage na: ${searchedKeyword}`}
          </p>
        </div>
      </div>

      <div className='h-[200px] w-[100%] md:h-[300px] md:w-[100%] lg:h-[500px] lg:w-[65%] relative'>
        <Image
          src={!search ? imagePath : '/images/min2.jpg'}
          alt='baner'
          className='w-full h-full object-cover'
          width={5000}
          height={5000}
        />
      </div>
    </div>
  )
}

export default CollectionBaner

const BreadCrumbSection = ({ collection }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>
            <span
              className='uppercase text-[.65rem] text-[#ffffffc0] hover:border-b hover:border-white border-transparent transition-colors duration-300'
              style={{ fontFamily: 'var(--font-lato)' }}
            >
              Početna
            </span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className='text-[#ffffff84]' />
        <BreadcrumbItem>
          <BreadcrumbLink href={`/${collection}`}>
            <span
              className='uppercase text-[.65rem]  text-[#ffffff84]'
              style={{ fontFamily: 'var(--font-lato)' }}
            >
              {collection === 'mindjuse' ? 'Mindjuše' : collection}
            </span>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
