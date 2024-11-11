'use client'
import { motion } from 'framer-motion'
import { CiSearch } from 'react-icons/ci'
import { MdOutlineArrowBackIos } from 'react-icons/md'

const SearchMenu = ({ setOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 75 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 75 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className='w-full h-full fixed top-0 right-0 bg-white z-50 xl:w-[30vw] py-10 px-[1.5rem] xl:px-[2rem]'
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
        />
        <div>
          <CiSearch size={36} />
        </div>
      </div>
    </motion.div>
  )
}

export default SearchMenu
