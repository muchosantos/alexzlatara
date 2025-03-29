'use client'
import { CartItem } from '@/components/custom/CartMenu'
import CollectionBaner from '@/components/custom/CollectionBaner'
import Footer from '@/components/custom/Footer'
import SpaceFromTop from '@/components/custom/SpaceFromTop'
import Main from '@/components/layout/Main'
import { useCart } from '@/context/cart'
import { formatPrice } from '@/helpers'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const Cart = () => {
  const { cart, cartTotalQuantity, cartTotalAmount } = useCart()
  const [formSuccess, setFormSuccess] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleFormSuccess = () => {
    setFormSuccess(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Main navBg={'#fff'}>
      <SpaceFromTop />
      <CollectionBaner collection={`Korpa`} cart={true} />

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
          <div className='md:w-[50%] md:sticky top-[10rem]'>
            <CartForm onSuccess={handleFormSuccess} />
          </div>

          {isClient && !formSuccess && (
            <div className='md:w-[50%]'>
              {cart.map((item, index) => (
                <CartItem key={index} item={item} />
              ))}
            </div>
          )}
        </div>

        {isClient && !formSuccess && (
          <div className='block md:hidden'>
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
          </div>
        )}
      </div>

      <Footer />
    </Main>
  )
}

export default Cart

const CartForm = ({ onSuccess }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [adress, setAdress] = useState('')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const { cart, cartTotalQuantity, cartTotalAmount } = useCart()

  const handleSubmit = async () => {
    const newErrors = {}
    if (!name) newErrors.name = 'Ovo polje je obavezno.'
    if (!email) newErrors.email = 'Ovo polje je obavezno.'
    if (!phone) newErrors.phone = 'Ovo polje je obavezno.'
    if (!adress) newErrors.adress = 'Ovo polje je obavezno.'

    setErrors(newErrors)
    setErrorMessage('')

    if (Object.keys(newErrors).length > 0) return

    setLoading(true)

    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          adress,
          cart,
          totalQuantity: cartTotalQuantity,
          totalAmount: cartTotalAmount,
        }),
      })

      if (!res.ok) throw new Error('Greška prilikom slanja.')

      setSuccess(true)
      onSuccess?.()
    } catch (err) {
      console.error(err)
      setErrorMessage('Došlo je do greške. Pokušajte ponovo.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = (field) =>
    `border-b w-full py-5 text-[1.2rem] outline-none transition-colors duration-200 ${
      errors[field] ? 'border-red-400' : 'border-gray-300'
    }`

  const renderError = (field) => (
    <div
      className={`text-[.8rem] transition-all duration-300 h-[1rem] mt-1 ${
        errors[field] ? 'text-red-400 opacity-100' : 'opacity-0'
      }`}
    >
      {errors[field] || '•'}
    </div>
  )

  if (success) {
    return (
      <div className='p-6 bg-green-100 border border-green-300 rounded-xl text-green-800'>
        <p className='text-xl font-semibold mb-2'>Hvala vam na poverenju!</p>
        <p className='text-sm mb-6'>
          Vaša porudžbina je uspešno poslata. Uskoro će vas kontaktirati naš tim
          iz Zlatare Alex.
        </p>
        <Link
          href='/'
          className='inline-block px-5 py-3 bg-green-600 text-white rounded-full text-sm hover:bg-green-700 transition'
        >
          Nazad na početnu
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className='mb-[2rem]'>
        <input
          type='text'
          placeholder='Vaše ime i prezime'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputStyle('name')}
          style={{ fontFamily: 'var(--font-lato)' }}
        />
        {renderError('name')}
      </div>

      <div className='mb-[2rem]'>
        <input
          type='email'
          placeholder='Vaš e-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputStyle('email')}
          style={{ fontFamily: 'var(--font-lato)' }}
        />
        {renderError('email')}
      </div>

      <div className='mb-[2rem]'>
        <input
          type='text'
          placeholder='Vaš telefon'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputStyle('phone')}
          style={{ fontFamily: 'var(--font-lato)' }}
        />
        {renderError('phone')}
      </div>

      <div className='mb-[2rem]'>
        <input
          type='text'
          placeholder='Vaša adresa'
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
          className={inputStyle('adress')}
          style={{ fontFamily: 'var(--font-lato)' }}
        />
        {renderError('adress')}
      </div>

      {errorMessage && (
        <div className='mb-6 text-red-500 text-sm transition-all duration-300'>
          {errorMessage}
        </div>
      )}

      <div className='my-16'>
        <div className='flex justify-between items-center mb-5'>
          <span
            className='text-[.8rem] uppercase'
            style={{ fontFamily: 'var(--font-lato)' }}
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
            className='text-[.8rem] uppercase'
            style={{ fontFamily: 'var(--font-lato)' }}
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
            className='text-[1rem] text-red-500'
            style={{ fontFamily: 'var(--font-lato)' }}
          >
            *Nakon poručivanja očekujte poziv od strane našeg tima iz Zlatare
            Alex radi potvrde i dodatnih informacija.
          </span>
        </div>
      </div>

      <button
        disabled={loading}
        onClick={handleSubmit}
        className='border border-black w-full rounded-[30px] py-3 bg-[#1b1b1b] text-white transition-opacity duration-200 hover:opacity-90'
        style={{ fontFamily: 'var(--font-lato)' }}
      >
        {loading ? 'Slanje...' : 'Naručite'}
      </button>
    </div>
  )
}
