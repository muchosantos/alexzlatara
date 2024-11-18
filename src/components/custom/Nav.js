'use client'

import { useState } from 'react'

import Hamburger from 'hamburger-react'
import { PiBagSimpleThin } from 'react-icons/pi'
import { CiSearch } from 'react-icons/ci'
import { useMenuContext } from '@/context/menus'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useCart } from '@/context/cart'

const Nav = ({ navBg, light }) => {
  const [isOpen, setOpen] = useState(false)

  const { setOpenSearch, setOpenCart, setOpenMenu } = useMenuContext()
  const { cartTotalQuantity } = useCart()
  const router = useRouter()

  const links = [
    {
      title: 'Prstenje',
      url: '/prstenje',
    },
    {
      title: 'Burme',
      url: '/burme',
    },
    {
      title: 'Narukvice',
      url: '/narukvice',
    },
    // {
    //   title: 'Ogrlice',
    //   url: '/ogrlice',
    // },
    {
      title: 'Mindjuše',
      url: '/mindjuse',
    },
    {
      title: 'Privesci',
      url: '/privesci',
    },
  ]

  return (
    <nav
      className='fixed top-0 left-0 right-0 z-50'
      style={{ background: navBg }}
    >
      <div
        className={`px-[1rem] py-6 flex items-center justify-between md:px-[2rem] lg:px-[4rem] xl:px-[4rem] mx-auto`}
      >
        {/* <div
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
        </div> */}

        <div
          className='md:block  xl:hidden 2xl:hidden'
          onClick={() => setOpenMenu(true)}
        >
          <Hamburger
            // toggled={isOpen}
            toggle={setOpen}
            hideOutline={true}
            size={36}
            // color={'#fff'}
            color={light ? '#fff' : '#000'}
          />
        </div>

        <div className='lg:flex items-center '>
          <h1
            className='logo ml-10 md:ml-0 text-[2.5rem] font-medium tracking-tighter  lg:mr-10 2xl:mr-10 cursor-pointer xl:text-[3.2rem]'
            style={{ color: light ? '#fff' : '#000' }}
            onClick={() => router.push('/')}
          >
            ALEX
          </h1>

          <ul className='hidden xl:flex gap-8'>
            {links.map((li, i) => (
              <Link href={li.url} key={i}>
                <li
                  className={`text-[1rem] border-b border-transparent cursor-pointer transition-all duration-300 
                ${light ? 'hover:border-white' : 'hover:border-black'} 
                hover:border-b`}
                  style={{
                    fontFamily: 'var(--font-lato)',
                    color: light ? '#fff' : '#000',
                  }}
                >
                  {li.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className='flex gap-8 items-center'>
          <Link href={'/o-nama'}>
            <li
              className={`hidden border-b border-transparent  xl:block text-[1rem] transition-all duration-300 --font-lato list-none cursor-pointer   ${
                light ? 'hover:border-white' : 'hover:border-black'
              } 
            hover:border-b`}
              style={{
                fontFamily: 'var(--font-lato)',
                color: light ? '#fff' : '#000',
              }}
            >
              O nama
            </li>
          </Link>

          <div className='hidden xl:block' onClick={() => setOpenSearch(true)}>
            <CiSearch
              size={32}
              style={{ color: light ? '#fff' : '#000' }}
              className='lg:h-10 lg:w-10 xl:h-6 xl:w-6 2xl:h-6 2xl:w-6 cursor-pointer'
            />
          </div>

          <div className='relative'>
            <PiBagSimpleThin
              onClick={() => setOpenCart(true)}
              size={32}
              style={{ color: light ? '#fff' : '#000' }}
              className='md:h-12 w-12 lg:h-10 lg:w-10 xl:h-6 xl:w-6 2xl:h-6  2xl:w-6 cursor-pointer '
            />
            <div
              style={{
                color: light ? '#fff' : '#000',
                fontFamily: 'var(--font-lato)',
              }}
              onClick={() => setOpenCart(true)}
              className='absolute top-[1.1rem] md:top-[1.6rem] md:text-[1rem] lg:top-[1.4rem] lg:text-[.9rem] xl:text-[.7rem] xl:top-[.85rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#fff] text-[.6rem] cursor-pointer'
            >
              {cartTotalQuantity}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
