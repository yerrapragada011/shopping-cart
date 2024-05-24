import { useEffect, useState } from 'react'
import Products from './Products'
import styles from './Homepage.module.css'
import Product from './Product'

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
          <div key={index} className={styles.product} id={item.id}>
            <Product item={item} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Homepage
