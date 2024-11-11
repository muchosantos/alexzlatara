'use client'
import { ModelsContext } from './../context/models'
import { useMotionValue } from 'framer-motion'
import { useContext, useEffect } from 'react'

// znaci ovo je customHook koji radi proracune na osnovu visine ekrana, scroll-a i slicno

const useWrapperScroll = () => {
  const { wrapperRef } = useContext(ModelsContext)

  const scrollY = useMotionValue(0)
  const scrollYProgress = useMotionValue(0)

  useEffect(() => {
    const element = wrapperRef.current

    if (element) {
      const updateScrollValue = () => {
        const { scrollTop, scrollHeight, offsetHeight } = element

        const fullScroll = scrollHeight - offsetHeight

        scrollY.set(scrollTop)
        scrollYProgress.set(scrollTop / fullScroll)
      }

      // ovo se pravi umesto window.addEventListener jer trenutno je undifined kada se postavi ovakav vebsajt
      element.addEventListener('scroll', updateScrollValue)

      return () => element.removeEventListener('scroll', updateScrollValue)
    }
  }, [scrollY, scrollYProgress, wrapperRef])

  return { scrollY, scrollYProgress }
}

export default useWrapperScroll
