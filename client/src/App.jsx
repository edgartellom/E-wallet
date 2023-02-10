import './App.css';
import Navbar from './commons/navbar/Navbar';
import HomePage from './pages/home/Home';
import Details from './pages/details/Details';
import Footer from './commons/footer/Footer';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Loading from './commons/loading/Loading';
import CreatePhones from './components/create/createPhones';


  
function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='phone/:id' element={<Details></Details>} />

      </Routes>
      <Footer/>
      </BrowserRouter>
  )
}

export default App
