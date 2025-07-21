import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './componets/Header'
import Footer from './components/Footer'
import Home from './pages/Home' // <-- Adjust path if Home is in a different folder
import OrderTracking from './pages/OrderTracking'
import ProductListing from './pages/ProductListing'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductListing" element={<ProductListing />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
        </Routes>
         <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
