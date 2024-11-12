'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import MenuContactSection from './MenuContactSection'
import ProductBox from './ProductBox'
import Products from './Products'

const SearchMenu = ({ setOpen }) => {
  const [input, setInput] = useState('')
  const [products, setProducts] = useState([])

  const suggestions = ['Prstenje', 'Plavi dijamant', 'Prsten sa cirkonom']
  const pages = [
    'Razlika izmedju belog i zutog zlata',
    'Kako kupovati mindjuše?',
  ]

  const categoris = [
    'Prstenje & Burme',
    'Narukvice',
    'Ogrlice',
    'Mindjuše',
    'Satovi',
  ]

  const fetchProducts = async (search) => {
    if (search === '') return

    try {
      const response = await fetch('/api/wix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ search }),
      })
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  useEffect(() => {
    // Ako je input prazan, ne radi ništa
    if (input === '') return

    const timeoutId = setTimeout(() => {
      fetchProducts(input)
    }, 1000) // Povećaj interval na 1000ms (1 sekunda)

    // Cleanup funkcija koja čisti timeout svaki put kad se input menja
    return () => {
      clearTimeout(timeoutId)
    }
  }, [input]) // 'input' kao zavisnost

  return (
    <motion.div
      initial={{ opacity: 0, x: 75 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 75 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className='w-full h-full fixed top-0 right-0 bg-white z-50 xl:w-[30vw] py-10 px-[1.5rem] xl:px-[2rem] overflow-y-scroll'
    >
      <div onClick={() => setOpen(false)} className='cursor-pointer w-fit'>
        <MdOutlineArrowBackIos size={26} />
      </div>

      <div className='border border-gray-300 mt-10 py-4 px-4 flex items-center justify-between'>
        <input
          type='text'
          placeholder='Pretražite'
          className='outline-none w-full mr-4 text-[1.5rem]'
          style={{
            fontFamily: 'var(--font-lato)',
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div>
          <CiSearch size={36} />
        </div>
      </div>

      {input === '' && (
        <>
          <div className='my-10'>
            {categoris.map((item, i) => (
              <li
                key={i}
                style={{
                  fontFamily: 'var(--font-lato)',
                }}
                className='list-none my-4 font-light text-[2rem] cursor-pointer w-fit transition-colors duration-300 text-[#006032c2] hover:text-[#006032]'
              >
                {item}
              </li>
            ))}
          </div>
          <MenuContactSection />
        </>
      )}

      {input !== '' && (
        <Suggestions suggestions={suggestions} pages={pages} input={input} />
      )}
    </motion.div>
  )
}

export default SearchMenu

const Suggestions = ({ suggestions, pages, input }) => {
  return (
    <div className='my-10'>
      <span
        className='uppercase text-[1rem] tracking-widest font-light text-[#212121]'
        style={{
          fontFamily: 'var(--font-lato)',
        }}
      >
        Preporuke
      </span>

      <div className='flex flex-col gap-4 mt-4'>
        {suggestions.map((item, i) => (
          <span
            key={i}
            className='text-[1.2rem] cursor-pointer'
            style={{
              fontFamily: 'var(--font-lato)',
            }}
          >
            {item}
          </span>
        ))}
      </div>

      <span
        className='uppercase text-[1rem] tracking-widest font-light text-[#212121] mt-16 block'
        style={{
          fontFamily: 'var(--font-lato)',
        }}
      >
        Stranice
      </span>

      <div className='flex flex-col gap-4 mt-4'>
        {pages.map((item, i) => (
          <span
            key={i}
            className='text-[1.2rem] cursor-pointer'
            style={{
              fontFamily: 'var(--font-lato)',
            }}
          >
            {item}
          </span>
        ))}
      </div>

      <span
        className='uppercase text-[1rem] tracking-widest font-light text-[#212121] mt-16 block'
        style={{
          fontFamily: 'var(--font-lato)',
        }}
      >
        Proizvodi
      </span>

      <div className='grid grid-cols-2 gap-x-8 gap-y-8 mt-4'>
        {[1, 2, 3, 4].map((item) => (
          <ProductBox key={item} price={false} />
        ))}
      </div>

      <div className='mt-16 flex justify-center'>
        <span
          className='text-center block uppercase border-b border-black w-fit cursor-pointer tracking-wider font-medium text-[1.2rem]'
          style={{
            fontFamily: 'var(--font-lato)',
          }}
        >
          Pretražite sve {`'${input}'`}
        </span>
      </div>
    </div>
  )
}
