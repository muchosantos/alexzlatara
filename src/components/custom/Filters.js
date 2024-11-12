'use client'

import { useMenuContext } from '@/context/menus'

const Filters = ({ length }) => {
  const { openFilter, setOpenFilter } = useMenuContext()

  return (
    <div className=' bg-white'>
      {/* <div
        className='border border-gray-200 w-[50%] py-5 text-center text-[0.8rem] xl:text-[1rem] tracking-wide cursor-pointer hover:bg-black hover:text-white hover:border-black transition-colors duration-300'
        style={{ fontFamily: 'var(--font-lato)' }}
        onClick={() => setOpenFilter(true)}
      >
        FILTERI
      </div> */}
      {/* <div
        className='hidden xl:block border-t border-b border-r border-gray-200 w-[50%] xl:text-[1rem] py-5 text-center text-[0.8rem] tracking-wide cursor-pointer'
        style={{ fontFamily: 'var(--font-lato)' }}
        onClick={() => openPrice()}
      >
        20 Proizvoda
      </div> */}
      <div
        className='border-t border-b border-gray-200  py-5 text-center text-[0.8rem] xl:text-[1rem] tracking-wide'
        style={{ fontFamily: 'var(--font-lato)' }}
      >
        {length} PROIZVODA
      </div>
    </div>
  )
}

export default Filters
