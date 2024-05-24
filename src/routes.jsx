import App from './App.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import Cart from './Components/Cart.jsx'

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/cart',
    element: <Cart />
  }
]

export default routes
