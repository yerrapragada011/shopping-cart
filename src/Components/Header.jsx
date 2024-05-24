import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

function Header() {
  return (
    <div className={styles.header}>
      <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
        <h1>Shop</h1>
      </Link>
      <Link to='/cart' style={{ textDecoration: 'none', color: 'black' }}>
        <h1>
          <ShoppingCartIcon fontSize='large' />
        </h1>
      </Link>
    </div>
  )
}

export default Header
