'use client'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { MdOutlineArrowBackIos } from 'react-icons/md'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const FilterMenu = ({ setOpen }) => {
  const { collection } = useParams()
  console.log(collection)

  return (
    <motion.div
      initial={{ opacity: 0, x: -75 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -75 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className='w-full h-full fixed top-0 left-0 bg-white z-50 xl:w-[25vw] py-10 px-[1.5rem] xl:px-[2rem] overflow-y-scroll'
    >
      <div onClick={() => setOpen(false)} className='cursor-pointer w-fit'>
        <MdOutlineArrowBackIos size={26} />
      </div>

      <div className='border-b border-gray-300 py-8'>
        <span
          className='text-[2rem] tracking-tight font-light xl:text-[3rem]'
          style={{ fontFamily: 'var(--font-lato)' }}
        >
          Filtrirajte
        </span>
      </div>

      {/* Svi proizvodi imaju filtriranje na osnovu cene - CENA */}

      {/* SATOVI */}
      {/* SATOVI imaju dodatan filter muski/zenski/deca */}

      {/* PRSTENJE */}
      {/* PRSTENJE ima dodatan filter namenu - vencanja, burme i slicno */}
      {/* PRSTENJE ima filter boja - zlato, srebrno */}
      {/* PRSTENJE ima filter velicina */}

      <AccordionDemo />

      <button
        style={{ fontFamily: 'var(--font-lato)' }}
        className='border border-black w-full rounded-[30px] py-3 bg-[#1b1b1b] text-[white]'
        onClick={() => setOpen(false)}
      >
        Resetujte filtere
      </button>
      <button
        style={{ fontFamily: 'var(--font-lato)' }}
        className='border border-black w-full mt-4 rounded-[30px] py-3 bg-[#fff] text-[#1b1b1b]'
        onClick={() => setOpen(false)}
      >
        Pretražite
      </button>
    </motion.div>
  )
}

export default FilterMenu

function AccordionDemo() {
  return (
    <Accordion type='multiple' collapsible className='w-full my-10'>
      <AccordionItem value='item-1' className='py-3'>
        <AccordionTrigger className='text-[1.5rem] font-light '>
          Boja
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2' className='py-3'>
        <AccordionTrigger className='text-[1.5rem] font-light '>
          Pol
        </AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3' className='py-3'>
        <AccordionTrigger className='text-[1.5rem] font-light '>
          Cena
        </AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
