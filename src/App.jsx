import { Outlet } from 'react-router-dom'
import Header from './Components/Header.jsx'
import { useState, useEffect } from 'react'

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem('cart')
  try {
    return cart ? JSON.parse(cart) : []
  } catch (e) {
    console.error('Error parsing cart from localStorage', e)
    return []
  }
}

function App() {
  const [cart, setCart] = useState(getCartFromLocalStorage())

  const handleAddToCart = (item, quantity) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id)
    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      )
      setCart(updatedCart)
    } else {
      setCart([...cart, { ...item, quantity }])
    }
  }

  const handleDeleteFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id)
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <>
      <Header size={cart.length} />
      <Outlet context={{ handleAddToCart, cart, handleDeleteFromCart }} />
    </>
  )
}

export default App
