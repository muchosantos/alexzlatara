'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { useCart } from '@/context/cart'
import { formatPrice } from '@/helpers'

const CartMenu = ({ setOpen }) => {
  const { cart, cartTotalQuantity, cartTotalAmount } = useCart()

  return (
    <motion.div
      initial={{ opacity: 0, x: 75 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 75 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className='w-full h-full fixed top-0 right-0 bg-white z-[1000] md:w-[75vw]  lg:w-[50vw] xl:w-[30vw] py-10 px-[1.5rem] xl:px-[2rem] overflow-scroll'
    >
      <div onClick={() => setOpen(false)} className='cursor-pointer w-fit'>
        <MdOutlineArrowBackIos size={26} />
      </div>

      <div className='border-b border-gray-300 py-8'>
        <span
          className='text-[2rem] tracking-tight font-light xl:text-[3rem]'
          style={{ fontFamily: 'var(--font-lato)' }}
        >
          Vaša Korpa
        </span>
      </div>

      {Object.keys(cart).length === 0 && (
        <div className='py-8'>
          <span
            style={{ fontFamily: 'var(--font-lato)' }}
            className='text-[1.2rem] tracking-tight font-light block xl:text-[1.5rem]'
          >
            Vaša korpa je prazna
          </span>
          <button
            style={{ fontFamily: 'var(--font-lato)' }}
            className='border border-black w-full mt-8 rounded-[30px] py-3 bg-[#1b1b1b] text-[white]'
            onClick={() => setOpen(false)}
          >
            Nastavite sa kupovinom
          </button>
        </div>
      )}

      {Object.keys(cart).length !== 0 && (
        <div className='py-8'>
          {cart.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}

          <div className='my-16'>
            <div className='flex justify-between items-center mb-5'>
              <span
                style={{ fontFamily: 'var(--font-lato)' }}
                className='text-[.8rem] uppercase'
              >
                Totalno proizvoda:
              </span>
              <span
                className='text-[1.5rem] uppercase font-bold'
                style={{ fontFamily: 'var(--font-lato)' }}
              >
                {cartTotalQuantity}
              </span>
            </div>
            <div className='flex justify-between items-center'>
              <span
                style={{ fontFamily: 'var(--font-lato)' }}
                className='text-[.8rem] uppercase'
              >
                Totalno za plaćanje:
              </span>
              <span
                className='text-[1.5rem] uppercase font-bold'
                style={{ fontFamily: 'var(--font-lato)' }}
              >
                {formatPrice(cartTotalAmount)},00 RSD
              </span>
            </div>
            <div className='flex justify-between items-center mt-10'>
              <span
                style={{ fontFamily: 'var(--font-lato)' }}
                className='text-[1rem] text-red-500'
              >
                *Nakon poručivanja očekujte poziv od strane našeg tima iz
                Zlatare Alex radi potvrde i dodatnih informacija.
              </span>
            </div>
          </div>

          <button
            style={{ fontFamily: 'var(--font-lato)' }}
            className='border border-black w-full rounded-[30px] py-3 bg-[#1b1b1b] text-[white]'
            onClick={() => setOpen(false)}
          >
            Nastavite sa kupovinom
          </button>
          <button
            style={{ fontFamily: 'var(--font-lato)' }}
            className='border border-black w-full mt-4 rounded-[30px] py-3 bg-[#fff] text-[#1b1b1b]'
            onClick={() => setOpen(false)}
          >
            Nastavite na poručivanje
          </button>
        </div>
      )}
    </motion.div>
  )
}

export default CartMenu

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart()

  return (
    <div className='border-b border-gray-200 py-4'>
      <div className='w-full h-[300px]'>
        <Image
          src={item.media.mainMedia.image.url} // ispravna putanja
          alt='Opis slike'
          width={5000} // postavite na željenu širinu
          height={5000} // postavite na željenu visinu
          className='w-[100%] h-[100%] object-cover' // ili object-cover
        />
      </div>

      <div className='flex flex-col justify-between gap-4 mt-4'>
        <div className='flex justify-between items-baseline'>
          <span className='font-medium text-[1.3rem]'>{item.name}</span>
          <span className='text-[10px] text-gray-600 border border-black rounded-[10px] w-fit p-2'>
            Količina: {item.qty}
          </span>
        </div>

        <div className='flex justify-between items-baseline'>
          <span className='text-[1.5rem] text-black'>
            {' '}
            {formatPrice(item.priceData.price)},00 RSD
          </span>
          <span
            className='text-[.9rem] cursor-pointer transition-colors duration-300 hover:text-red-500'
            onClick={() => removeFromCart(item._id)}
          >
            Uklonite
          </span>
        </div>
      </div>
    </div>
  )
}
