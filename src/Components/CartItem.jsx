import PropTypes from 'prop-types'
import { useOutletContext } from 'react-router-dom'
import styles from './CartItem.module.css'

function CartItem({ item }) {
  const { handleDeleteFromCart } = useOutletContext()

  return (
    <>
      <img
        src={item.image}
        alt={item.description}
        className={styles.cartImage}
      />
      <p>{item.title}</p>
      <p>${item.price}</p>
      <button onClick={() => handleDeleteFromCart(item.id)}>
        Delete from cart
      </button>
    </>
  )
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default CartItem
