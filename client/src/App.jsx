import "./App.css";
import Navbar from "./commons/navbar/Navbar";
import {
  Home,
  Products,
  Details,
  About,
  Cart,
  Contact,
  OrderHistory,
} from "./pages";
import Footer from "./commons/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePhones from "./components/create/CreatePhones";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Details />} />
        {/* <Route path="/phones" element={<CreatePhones />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orderHistory" element={<OrderHistory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
