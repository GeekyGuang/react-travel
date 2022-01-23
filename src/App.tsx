import styles from './App.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  HomePage,
  SignInPage,
  RegisterPage,
  DetailPage,
  ShoppingCart,
} from './pages'

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/detail/:touristRouteId" element={<DetailPage />} />
          <Route path="*" element={<div>404 not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
