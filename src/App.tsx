import styles from './App.module.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {
  HomePage,
  SignInPage,
  RegisterPage,
  DetailPage,
  ShoppingCart,
} from './pages'
import { useSelector } from './redux/hooks'

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/signIn" />
}

function App() {
  const jwt = useSelector((s) => s.user.token)
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/detail/:touristRouteId" element={<DetailPage />} />
          <Route
            path="/shoppingCart"
            element={
              <PrivateRoute isAuthenticated={jwt !== null}>
                <ShoppingCart />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<div>404 not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
