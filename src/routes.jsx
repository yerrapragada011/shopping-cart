import App from './App.jsx'
import ErrorPage from './Components/ErrorPage.jsx'

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  }
]

export default routes
