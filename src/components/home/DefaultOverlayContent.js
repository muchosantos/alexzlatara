'use client'
import { useMyContext } from './../../context/models'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

// ovo je komponenta koja prikazuje samo kontent, nema nikakvu funkcionalnost

const DefaulyOverlayContent = ({ label, description, url }) => {
  const router = useRouter()

  return (
    <div className='p-0 flex flex-col justify-around flex-1 text-center relative z-30'>
      <div>
        <h1 className='homepageHeading'>{label}</h1>
        <p className='homepageText'>{description}</p>
      </div>

      <div>
        <button
          onClick={() => router.push(url)}
          className='w-[300px] border border-[#70380e] bg-white text-[#70380e] p-3 transition-all duration-500 ease-in-out hover:bg-[#70380e] hover:text-white cursor-pointer rounded-[30px]'
        >
          Pogledajte proizvode
        </button>
      </div>
    </div>
  )
}

export default DefaulyOverlayContent
