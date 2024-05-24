import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Products from './Products'
import styles from './Homepage.module.css'

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
            <img
              className={styles.productImage}
              src={item.image}
              alt={item.description}
            />
            <p>{item.title}</p>
            <p>${item.price}</p>
            <label htmlFor='quantity'>
              x:
              <input
                type='number'
                name='quantity'
                maxLength='1'
                min='1'
                max='9'
                step='1'
                className={styles.productQuantity}
                defaultValue={1}
              />
            </label>
            <button
              className={styles.productButton}
              onClick={() => handleAddToCart(item)}
            >
              Add to cart
            </button>
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
