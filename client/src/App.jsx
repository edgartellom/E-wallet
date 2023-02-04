import './App.css';
import Navbar from './commons/navbar/Navbar';
import HomePage from './pages/home/Home';
import Footer from './commons/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

  
function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />} /> 
      </Routes>
      <Footer/>
      </BrowserRouter>
  )
}

export default App
