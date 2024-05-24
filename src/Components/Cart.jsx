import Header from './Header'
import styles from './Cart.module.css'

function Cart() {
  return (
    <>
      <Header />
      <div className={styles.cart}>
        <h1>Shopping cart</h1>
      </div>
    </>
  )
}

export default Cart
