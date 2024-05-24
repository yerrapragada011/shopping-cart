import Homepage from './Components/Homepage.jsx'
import Header from './Components/Header.jsx'
import { useState, useEffect } from 'react'

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
      <Header />
      <Homepage handleAddToCart={handleAddToCart} />
    </>
  )
}

export default App
