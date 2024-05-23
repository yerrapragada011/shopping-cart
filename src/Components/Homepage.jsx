import { useEffect, useState } from 'react'
import Products from './Products'

function Homepage() {
  const [productCards, setProductCards] = useState([])

  useEffect(() => {
    const initializeProducts = async () => {
      const data = await Products()

      setProductCards(data)
    }

    initializeProducts()
  }, [])

  return (
    <>
      {productCards.map((item, index) => (
        <div key={index}>
          {item.title} {item.price}
        </div>
      ))}
    </>
  )
}

export default Homepage
