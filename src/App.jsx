import { Outlet } from 'react-router-dom'
import Header from './Components/Header.jsx'
import { useState, useEffect } from 'react'

const cartLocalStorage = JSON.parse(localStorage.getItem('cart') || [])

function App() {
  const [cart, setCart] = useState(cartLocalStorage)

  const handleAddToCart = (item) => {
    setCart([...cart, item])
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
