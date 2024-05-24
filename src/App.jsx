import { Outlet } from 'react-router-dom'
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
      <Header size={cart.length} />
      <Outlet context={{ handleAddToCart }} />
    </>
  )
}

export default App
