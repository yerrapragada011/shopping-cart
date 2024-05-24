import styles from './Cart.module.css'
import { useOutletContext } from 'react-router-dom'

function Cart() {
  const { cart } = useOutletContext()
  return (
    <>
      <div className={styles.cart}>
        <h1>Shopping cart</h1>
        {cart.map((item, index) => (
          <div key={index} id={item.id} className={styles.cartItem}>
            <img
              src={item.image}
              alt={item.description}
              className={styles.cartImage}
            />
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cart
