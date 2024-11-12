import React from 'react'

import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='w-full  bg-[#0f0f0f] px-[1.5rem] py-[2rem] md:px-[2rem] lg:px-[4rem]'>
      <div className='text-center pt-[3rem] md:text-left'>
        <h1 className='footerLogo text-[#fff] text-[4rem] md:text-[5rem] lg:text-[8rem] tracking-tighter'>
          ALEX
        </h1>
        <p
          className='text-[#bcbcbc] tracking-tight text-[.8rem] px-[3rem] font-light md:w-[400px] md:px-[0rem] md:text-[1rem] lg:text-[1rem] lg:w-[650px]'
          style={{
            fontFamily: 'var(--font-lato)',
          }}
        >
          U zlatarni Alex, od 2010. godine pažljivo biramo i nudimo jedinstveni
          nakit, namenjen da se nosi svakodnevno i sa stilom, dostupan svima.
        </p>
      </div>

      <div className='mt-[5rem]'>
        <h6
          style={{
            fontFamily: 'var(--font-lato)',
          }}
          className='text-[.8rem] text-[#e6dfdfcc] font-light mb-4 md:text-[1.5rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1rem]'
        >
          Kontaktirajte nas
        </h6>
        <a
          className='block text-[#fff] hover:text-[#ffffff] border-b-[#ecececa0] text-[1.8rem] lg:text-[2.2rem] hover:border-b-[#ffffff] transition-colors duration-300'
          href='mailto:info@alexzlatara.co.rs'
          style={{ textDecoration: 'none', fontFamily: 'var(--font-lato)' }}
        >
          info@alexzlatara.co.rs
        </a>
        <a
          className='block text-[#fff] hover:text-[#ffffff]  border-b-[#fff] text-[.9rem] lg:text-[1rem] my-3 hover:border-b-[#ffffff] transition-colors duration-300'
          href='mailto:info@alexzlatara.co.rs'
          style={{ textDecoration: 'none', fontFamily: 'var(--font-lato)' }}
        >
          +361 60 33 523
        </a>
        <a
          className='block  text-[#fff] hover:text-[#ffffff] border-b-[#ecececa0] text-[.9rem] lg:text-[1rem] hover:border-b-[#ffffff] transition-colors duration-300'
          href='mailto:info@alexzlatara.co.rs'
          style={{ textDecoration: 'none', fontFamily: 'var(--font-lato)' }}
        >
          Kriva Caršija 21, 35210 Svilajnac
        </a>

        <div className='flex gap-6 mt-8'>
          <FaFacebookF size={36} color={'#fff'} />
          <FaInstagram size={40} color={'#fff'} />
        </div>
      </div>

      <div className='mt-10 pt-4 border-t border-[#ffffffa4] md:flex justify-between items-center'>
        <span
          className='text-[#f4f4f4cc] text-[.8rem] block font-light md:text-[.9rem]'
          style={{
            fontFamily: 'var(--font-lato)',
          }}
        >
          © 2024 ALEX Zlatara. Sva prava zadržana.{' '}
        </span>

        <span
          className='text-[#f4f4f4cc] text-[.8rem] block mt-2 font-light md:text-[.9rem]  '
          style={{
            fontFamily: 'var(--font-lato)',
          }}
        >
          Design & Development{' '}
          <span className='text-[#fff] font-bold'>Scope.</span>
        </span>
      </div>
    </footer>
  )
}

export default Footer
