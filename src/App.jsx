import Homepage from './Components/Homepage.jsx'
import Header from './Components/Header.jsx'
import { useState, useEffect } from 'react'
import Cart from './Components/Cart.jsx'

function App() {
  const [cart, setCart] = useState([])

  const handleAddToCart = (item) => {
    setCart([...cart, item])
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <>
      <Header size={cart.length} />
      <Homepage handleAddToCart={handleAddToCart} />
      <Cart />
    </>
  )
}

export default App
