import './App.css';
import Navbar from './commons/Navbar/Navbar';
import HomePage from './pages/Home/Home';
import Details from './pages/Details/Details';
import Footer from './commons/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePhones from './components/Create/CreatePhones';
import ProductsPage from './pages/Products/ProductsPage';
import Cart from './components/shoppingCart/Cart';


  
function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<HomePage />} /> 
        <Route path='/phone/:id' element={<Details />} />
        <Route path='/products' element={<ProductsPage />}/>
        <Route path='/phones' element={<CreatePhones />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
  )
}

export default App
