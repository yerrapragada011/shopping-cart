import PropTypes from 'prop-types'
import styles from './Product.module.css'

function Product({ item, handleAddToCart }) {
  return (
    <>
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
    </>
  )
}

Product.propTypes = {
  item: PropTypes.string.isRequired,
  handleAddToCart: PropTypes.func.isRequired
}

export default Product
