'use client'
import { motion } from 'framer-motion'

const Overlay = ({ setOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
        delay: 0.2,
      }}
      onClick={() => setOpen()}
      className='hidden md:block w-full h-full bg-[#0000006a] fixed top-0 left-0 right-0 bottom-0 z-50'
    />
  )
}

export default Overlay
