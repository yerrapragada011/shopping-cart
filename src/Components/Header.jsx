import styles from './Header.module.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

function Header({ size }) {
  return (
    <div className={styles.header}>
      <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
        <h1>Shop</h1>
      </Link>
      <Link to='/cart' className={styles.cartIcon} style={{ textDecoration: 'none', color: 'black' }}>
        <span>{size}</span>

        <h1>
          <ShoppingCartIcon fontSize='large' />
        </h1>
      </Link>
    </div>
  )
}

Header.propTypes = {
  size: PropTypes.string
}

export default Header
