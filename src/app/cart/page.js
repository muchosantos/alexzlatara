'use client'
import { CartItem } from '@/components/custom/CartMenu'
import CollectionBaner from '@/components/custom/CollectionBaner'
import Footer from '@/components/custom/Footer'
import SpaceFromTop from '@/components/custom/SpaceFromTop'
import Main from '@/components/layout/Main'
import { useCart } from '@/context/cart'
import { formatPrice } from '@/helpers'
import Image from 'next/image'
import { useState } from 'react'

const Cart = () => {
  const { cart, cartTotalQuantity, cartTotalAmount } = useCart()

  return (
    <Main navBg={'#fff'}>
      <SpaceFromTop />
      <CollectionBaner collection={`Korpa`} cart={true} />

      {/* Prvo mora forma da se popuni zbog kontakta XD */}

      <div className='px-[1.5rem] md:px-[2rem] lg:px-[4rem] my-[5rem] max-w-[1200px] mx-auto'>
        <div className='w-[85%] my-[5rem]'>
          <span
            style={{ fontFamily: 'var(--font-lato)' }}
            className='text-[3rem] block tracking-tighter ml-[-.3rem]'
          >
            Kontakt informacije
          </span>

          <p
            className='text-[1.2rem] font-light'
            style={{ fontFamily: 'var(--font-lato)' }}
          >
            Molimo vas unesite kontakt informacije.
          </p>
        </div>

        <div className='md:flex gap-32 h-fit'>
          <div className='md:w-[50%] md:sticky top-[10rem] '>
            <CartForm />
          </div>
          <div className='md:w-[50%]'>
            {cart.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </div>
        </div>

        <div className='block md:hidden'>
          <div className=' my-16'>
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

          <div className=''>
            <button
              style={{ fontFamily: 'var(--font-lato)' }}
              className='border border-black w-full rounded-[30px] py-3 bg-[#1b1b1b] text-[white]'
              onClick={() => console.log('napravi api poziv')}
            >
              Naručite
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </Main>
  )
}

export default Cart

const CartForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [adress, setAdress] = useState('')

  const { cartTotalQuantity, cartTotalAmount } = useCart()

  return (
    <div>
      <div className='mb-[2rem]'>
        <input
          type='text'
          placeholder='Vaše ime i prezime'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border-b border-gray-300 w-full py-5 text-[1.2rem] outline-none'
          style={{ fontFamily: 'var(--font-lato)' }}
        />
        <span
          className={`${
            !name ? 'text-red-300' : 'text-transparent'
          } text-[.8rem]`}
        >
          Ovo polje je obavezno.
        </span>
      </div>
      <div className='mb-[2rem]'>
        <input
          type='text'
          placeholder='Vaš e-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border-b border-gray-300 w-full py-5 text-[1.2rem] outline-none'
          style={{ fontFamily: 'var(--font-lato)' }}
        />
        <span
          className={`${
            !email ? 'text-red-300' : 'text-transparent'
          } text-[.8rem]`}
        >
          Ovo polje je obavezno.
        </span>
      </div>

      <div className='mb-[2rem]'>
        <input
          type='text'
          placeholder='Vaš telefon'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className='border-b border-gray-300 w-full py-5 text-[1.2rem] outline-none'
          style={{ fontFamily: 'var(--font-lato)' }}
        />
        <span
          className={`${
            !phone ? 'text-red-300' : 'text-transparent'
          } text-[.8rem]`}
        >
          Ovo polje je obavezno.
        </span>
      </div>

      <div className='mb-[2rem]'>
        <input
          type='text'
          placeholder='Vaše e-mail'
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
          className='border-b border-gray-300 w-full py-5 text-[1.2rem] outline-none'
          style={{ fontFamily: 'var(--font-lato)' }}
        />
        <span
          className={`${
            !adress ? 'text-red-300' : 'text-transparent'
          } text-[.8rem]`}
        >
          Ovo polje je obavezno.
        </span>
      </div>

      <div className='hidden md:block'>
        <div className=' my-16'>
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
              *Nakon poručivanja očekujte poziv od strane našeg tima iz Zlatare
              Alex radi potvrde i dodatnih informacija.
            </span>
          </div>
        </div>

        <div className=''>
          <button
            style={{ fontFamily: 'var(--font-lato)' }}
            className='border border-black w-full rounded-[30px] py-3 bg-[#1b1b1b] text-[white]'
            onClick={() => console.log('napravi api poziv')}
          >
            Naručite
          </button>
        </div>
      </div>
    </div>
  )
}
