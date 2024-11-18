'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { CiSearch } from 'react-icons/ci'
import MenuContactSection from './MenuContactSection'
import { useState } from 'react'
import { Suggestions } from './SearchMenu'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

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
  {
    title: 'O nama',
    url: '/o-nama',
  },
]
const Menu = ({ setOpen }) => {
  const [input, setInput] = useState('')
  const router = useRouter()

  const handleSearch = () => {
    const searchKeyword = encodeURIComponent(input) // Enkodovanje za bezbedan URL
    const url = `/search?keyword=${searchKeyword}` // Konstrukcija URL-a
    router.replace(url)
    setOpen(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -75 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -75 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className='w-full h-full fixed top-0 left-0 bg-white z-50 xl:w-[30vw] pb-10 px-[1.5rem] overflow-y-scroll'
    >
      <div>
        <div className='flex justify-between items-center py-[1.5rem]'>
          <div onClick={() => setOpen(false)} className='cursor-pointer w-fit'>
            <MdOutlineArrowBackIos size={26} />
          </div>
          <h1 className='logo text-[2.5rem] font-medium tracking-tighter  lg:mr-10 2xl:mr-10 cursor-pointer xl:text-[3.2rem]'>
            ALEX
          </h1>

          <div className='h-10 w-10'></div>
        </div>

        <div className='border border-gray-300 py-4 px-4 flex items-center justify-between'>
          <input
            type='text'
            placeholder='Pretražite'
            className='outline-none w-full mr-4'
            style={{
              fontFamily: 'var(--font-lato)',
            }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch()
              }
            }}
          />
          <div>
            <CiSearch size={26} />
          </div>
        </div>

        <AnimatePresence>
          {input !== '' && (
            <Suggestions
              suggestions={''}
              pages={''}
              input={input}
              products={''}
              handleSearch={handleSearch}
            />
          )}

          {input === '' && (
            <>
              <div className='my-10'>
                {links.map((item, i) => (
                  <Link href={item.url} key={i} onClick={() => setOpen(false)}>
                    <li
                      style={{
                        fontFamily: 'var(--font-lato)',
                      }}
                      className='list-none my-4 font-light text-[2rem] cursor-pointer w-fit transition-colors duration-300 text-[#006032c2] hover:text-[#006032]'
                    >
                      {item.title}
                    </li>
                  </Link>
                ))}
              </div>

              <MenuContactSection />
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default Menu
