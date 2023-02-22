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
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes.jsx";
import AdminNav from "./Admin/AdminNav";
import AllProducts from "./Admin/AllProduct/AllProducts";
import Dasboard from "./Admin/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/orderHistory" element={<OrderHistory />} />
        <Route path="/cart" element={<Cart />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<AdminNav />} exact />
          <Route
            path="/dashboard/create-phones"
            element={<CreatePhones />}
            exact
          />
          <Route
            path="/dashboard/all-products"
            element={<AllProducts />}
            exact
          />
          <Route path="/dashboard/dashboard" element={<Dasboard />} exact />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
