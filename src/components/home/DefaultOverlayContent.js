'use client'
import { useMyContext } from './../../context/models'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

// ovo je komponenta koja prikazuje samo kontent, nema nikakvu funkcionalnost

const DefaulyOverlayContent = ({ label, description, theme, txtColor }) => {
  const { wrapperRef } = useMyContext()

  const router = useRouter()

  return (
    <div className='p-0 px-4 flex flex-col justify-around flex-1 text-center relative z-5'>
      <div>
        <h1 className='homepageHeading'>{label}</h1>
        <p className='homepageText'>{description}</p>
      </div>

      <div>
        <button
          onClick={() => router.push(label.toLowerCase())}
          className='w-[300px] border border-[#70380e] bg-white text-[#70380e] p-3 transition-all duration-500 ease-in-out hover:bg-[#70380e] hover:text-white cursor-pointer'
        >
          Pogledajte proizvode
        </button>
      </div>
    </div>
  )
}

export default DefaulyOverlayContent
