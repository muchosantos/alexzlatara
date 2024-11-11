'use client'

import { capitalizeFirstLetter } from '@/helpers'
import Image from 'next/image'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../ui/breadcrumb'

const CollectionBaner = ({ collection }) => {
  return (
    <div className='md:block lg:flex w-full justify-between h-[100%] relative'>
      <div className='lg:w-[35%] bg-[#006032] px-[2rem] py-[4rem] lg:px-[4rem] lg:pt-8 lg:pb-16 lg:flex flex-col justify-between'>
        <BreadCrumbSection collection={collection} />

        <div>
          <h3
            className='mb-5 text-[3rem] text-white tracking-tighter'
            style={{ fontFamily: 'var(--font-lato)' }}
          >
            {' '}
            {capitalizeFirstLetter(collection)}
          </h3>
          <p className='text-white' style={{ fontFamily: 'var(--font-lato)' }}>
            Prstenovi su bezvremeni komad nakita koji se može nositi kao modni
            detalj ili da označi nešto posebno. Dolaze u različitim stilovima,
            veličinama i materijalima, uključujući zlato, belo zlato, platinu i
            dragulje.
            {/* dragulje. Naša kolekcija sadrži klasične i moderne prstenove koji se
            mogu nositi za svakodnevne prilike ili posebne događaje. Bez obzira
            da li tražite odvažan komad koji privlači pažnju ili bezvremensku
            klasiku, imamo nešto za svakoga. Naš izbor uključuje dijamantske i
            draguljaste prstenove, vereničke prstenove, burme i još mnogo toga. */}
          </p>
        </div>
      </div>

      <div className='h-[200px] w-[100%] md:h-[300px] md:w-[100%] lg:h-[500px] lg:w-[65%] relative'>
        <Image
          src={'/baners/search.jpg'}
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
              {collection}
            </span>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
