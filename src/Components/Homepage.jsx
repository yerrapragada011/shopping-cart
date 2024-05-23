import { useEffect, useState } from 'react'
import Products from './Products'
import styles from './Homepage.module.css'

function Homepage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const initializeProducts = async () => {
      const data = await Products()

      setProducts(data)
    }

    initializeProducts()
  }, [])

  return (
    <>
      <div className={styles.productGrid}>
        {products.map((item, index) => (
          <div key={index} className={styles.product}>
            <img
              className={styles.productImage}
              src={item.image}
              alt={item.description}
            />
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Homepage
