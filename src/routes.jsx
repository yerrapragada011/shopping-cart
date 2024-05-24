import App from './App.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import Cart from './Components/Cart.jsx'
import Homepage from './Components/Homepage.jsx'

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  }
]

export default routes
