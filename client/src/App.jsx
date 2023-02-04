
import './App.css'
import Navbar from './commons/Navbar/Navbar'
import Footer from './commons/Footer/Footer'
import HomePage from './pages/home/Home'
import SeeAllProducts from './components/createProducts/seeAllProducts'

function App() {

  return (
    <>
      <SeeAllProducts />
      <Navbar></Navbar>
      <HomePage></HomePage>
      <Footer></Footer>
    </>
  )
}

export default App
