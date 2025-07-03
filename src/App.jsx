import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './componets/Header'
import Home from './pages/Home' // <-- Adjust path if Home is in a different folder
import OrderTracking from './pages/OrderTracking'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
