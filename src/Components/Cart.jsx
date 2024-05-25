import styles from './Cart.module.css'
import { useOutletContext } from 'react-router-dom'
import CartItem from './CartItem.jsx'

function Cart() {
  const { cart } = useOutletContext()
  return (
    <>
      <div className={styles.cart}>
        <h1>Shopping cart</h1>
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
