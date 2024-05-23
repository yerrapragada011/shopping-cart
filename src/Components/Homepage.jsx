import { useEffect, useState } from 'react'
import Products from './Products'

function Homepage() {
  const [productCards, setProductCards] = useState([])

  useEffect(() => {
    const initializeProducts = async () => {
      const items = await Products()

      setProductCards(items.map((title, index) => ({ id: index, title })))
    }

    initializeProducts()
  }, [])

  return (
    <>
      {productCards.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}
    </>
  )
}

export default Homepage
