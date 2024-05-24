import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Products from './Products'
import styles from './Homepage.module.css'
import Product from './Product'

function Homepage({ handleAddToCart }) {
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
            <Product item={item} handleAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </>
  )
}

Homepage.propTypes = {
  handleAddToCart: PropTypes.func.isRequired
}

export default Homepage
