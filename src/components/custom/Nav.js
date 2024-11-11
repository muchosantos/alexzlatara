'use client'

import { useState } from 'react'

import Hamburger from 'hamburger-react'
import { PiBagSimpleThin } from 'react-icons/pi'
import { CiSearch } from 'react-icons/ci'
import { useMenuContext } from '@/context/menus'

const Nav = ({ navBg, light }) => {
  const [isOpen, setOpen] = useState(false)

  const { setOpenSearch, setOpenCart, setOpenMenu } = useMenuContext()

  const links = [
    'Prstenje & Burme',
    'Narukvice',
    'Ogrlice',
    'Earrings',
    'Satovi',
  ]

  return (
    <nav
      className='fixed top-0 left-0 right-0 z-50'
      style={{ background: navBg }}
    >
      <div
        className={`px-[1rem] py-6 flex items-center justify-between md:px-[2rem] lg:px-[4rem] xl:px-[4rem] mx-auto`}
      >
        <div
          className='block md:hidden lg:hidden xl:hidden 2xl:hidden'
          onClick={() => setOpenMenu(true)}
        >
          <h1
            style={{
              fontFamily: 'var(--font-lato)',
              color: light ? '#fff' : '#000',
            }}
          >
            MENU
          </h1>
        </div>

        <div className='hidden md:block  xl:hidden 2xl:hidden'>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            hideOutline={true}
            size={36}
            // color={light ? '#fff' : '#000'}
          />
        </div>

        <div className='lg:flex items-center '>
          <h1
            className='logo text-[2.5rem] font-medium tracking-tighter  lg:mr-10 2xl:mr-10 cursor-pointer xl:text-[3.2rem]'
            style={{ color: light ? '#fff' : '#000' }}
          >
            ALEX
          </h1>

          <ul className='hidden xl:flex gap-8'>
            {links.map((li, i) => (
              <li
                key={i}
                className='text-[1rem] --font-lato cursor-pointer'
                style={{
                  fontFamily: 'var(--font-lato)',
                  color: light ? '#fff' : '#000',
                }}
              >
                {li}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex gap-8 items-center'>
          <li
            className='hidden xl:block text-[1rem] --font-lato list-none cursor-pointer'
            style={{
              fontFamily: 'var(--font-lato)',
              color: light ? '#fff' : '#000',
            }}
          >
            O nama
          </li>

          <li
            className='hidden xl:block text-[1rem] --font-lato list-none cursor-pointer'
            style={{
              fontFamily: 'var(--font-lato)',
              color: light ? '#fff' : '#000',
            }}
          >
            Kolekcije
          </li>
          <div className='hidden xl:block' onClick={() => setOpenSearch(true)}>
            <CiSearch
              size={32}
              style={{ color: light ? '#fff' : '#000' }}
              className='lg:h-10 lg:w-10 xl:h-6 xl:w-6 2xl:h-6 2xl:w-6 cursor-pointer'
            />
          </div>

          <div>
            <PiBagSimpleThin
              onClick={() => setOpenCart(true)}
              size={32}
              style={{ color: light ? '#fff' : '#000' }}
              className='md:h-12 w-12 lg:h-10 lg:w-10 xl:h-6 xl:w-6 2xl:h-6  2xl:w-6 cursor-pointer '
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
