'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'

// Inicijalno stanje
const getInitialCart = () => {
  if (typeof window !== 'undefined' && localStorage.getItem('cart')) {
    return JSON.parse(localStorage.getItem('cart'))
  }
  return []
}

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getInitialCart())
  const [cartTotalAmount, setCartTotalAmount] = useState(0)
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0)

  // Funkcija za ažuriranje `localStorage` kada se `cart` menja
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

  const addToCart = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem._id === item._id)
    if (itemIndex >= 0) {
      const updatedCart = [...cart]
      updatedCart[itemIndex].qty += 1
      setCart(updatedCart)
    } else {
      const newItem = { ...item, qty: 1 }
      setCart((prevCart) => [...prevCart, newItem])
    }
  }

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item._id !== itemId)
    setCart(updatedCart)
  }

  const decreaseQty = (itemId) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem._id === itemId)
    if (itemIndex >= 0) {
      const updatedCart = [...cart]
      if (updatedCart[itemIndex].qty > 1) {
        updatedCart[itemIndex].qty -= 1
      } else {
        updatedCart.splice(itemIndex, 1)
      }
      setCart(updatedCart)
    }
  }

  const getTotal = () => {
    let totalQuantity = 0
    let totalAmount = 0

    cart.forEach((cartItem) => {
      const { qty, priceData } = cartItem
      // const numericPrice = parseFloat(
      //   price.replace(/,00\.00$/, '').replace(/,/g, '')
      // )
      totalAmount += qty * priceData.price
      totalQuantity += qty
    })

    setCartTotalAmount(totalAmount)
    setCartTotalQuantity(totalQuantity)
  }

  const resetCart = () => {
    setCart([])
    setCartTotalAmount(0)
    setCartTotalQuantity(0)
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify([]))
    }
  }

  useEffect(() => {
    // Automatski izračunava ukupno kad god se `cart` promeni
    getTotal()
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotalAmount,
        cartTotalQuantity,
        addToCart,
        removeFromCart,
        decreaseQty,
        getTotal,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
