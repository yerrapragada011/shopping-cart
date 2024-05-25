import styles from './Cart.module.css'
import { useOutletContext } from 'react-router-dom'
import CartItem from './CartItem.jsx'

function Cart() {
  const { cart } = useOutletContext()

  const calculateTotal = () => {
    return cart
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2)
  }

  return (
    <>
      <div className={styles.cart}>
        <h1>Shopping cart</h1>
        <div className={styles.total}>
          <h2>Total: ${calculateTotal()}</h2>
        </div>
        {cart.map((item, index) => (
          <div key={index} id={item.id} className={styles.cartItem}>
            <CartItem item={item} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Cart
