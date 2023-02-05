
import './App.css'
import Navbar from './commons/Navbar/Navbar'
import Footer from './commons/Footer/Footer'
import HomePage from './pages/home/Home'
import SeeAllProducts from './components/createProducts/seeAllProducts'
import CreateProduct from './components/createProducts/createProduct'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<HomePage />} /> 
      </Routes>
      <Routes>
        <Route path='/all' element={<SeeAllProducts />} /> 
      </Routes>
      <Routes>
        <Route path='/create' element={<CreateProduct />} /> 
      </Routes>
      <Footer/>
      </BrowserRouter>
      </>
  )
}

export default App
