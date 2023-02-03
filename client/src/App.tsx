
import './App.css'
import { Footer } from './components/footer/footer.component'
import { Navbar } from './components/head/Navbar.component'
import { Home } from './components/pages/home/home.page'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
