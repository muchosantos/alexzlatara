import React from 'react'

const MenuContactSection = () => {
  return (
    <div className='mt-[5rem]'>
      <h6
        style={{
          fontFamily: 'var(--font-lato)',
        }}
        className='text-[1rem] text-[#1c1b1bcc] font-light mb-4 md:text-[1.5rem] lg:text-[2rem] xl:text-[1.5rem] 2xl:text-[1.5rem]'
      >
        Kontaktirajte nas
      </h6>
      <a
        className='block text-[#006032a0] hover:text-[#006032] border-b-[#006039] text-[2rem] hover:border-b-[#006039] transition-colors duration-300'
        href='mailto:info@alexzlatara.co.rs'
        style={{ textDecoration: 'none', fontFamily: 'var(--font-lato)' }}
      >
        info@alexzlatara.co.rs
      </a>
      <a
        className='block text-[#006032a0] hover:text-[#006032]  border-b-[#006039] text-[1.1rem] my-3 hover:border-b-[#006039] transition-colors duration-300'
        href='mailto:info@alexzlatara.co.rs'
        style={{ textDecoration: 'none', fontFamily: 'var(--font-lato)' }}
      >
        +361 60 33 523
      </a>
      <a
        className='block  text-[#006032a0] hover:text-[#006032] border-b-[#006039] text-[1.1rem] hover:border-b-[#006039] transition-colors duration-300'
        href='mailto:info@alexzlatara.co.rs'
        style={{ textDecoration: 'none', fontFamily: 'var(--font-lato)' }}
      >
        Kriva Caršija 2, 35210 Svilajnac
      </a>
    </div>
  )
}

export default MenuContactSection
