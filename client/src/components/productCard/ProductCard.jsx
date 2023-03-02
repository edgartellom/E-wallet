import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteProduct,
  getProductList,
} from "../../redux/slices/productListSlice";
import { useNavigate } from "react-router-dom";
import { addToCart, addToUserCart, getItemCart } from "../../redux/slices/cartSlice";

import { v4 as uuidv4 } from 'uuid'
import { useState } from "react";
import axios from 'axios'
import { createItemCart } from "../../redux/slices/cartSlice";
import { cartLogIn } from "../../redux/slices/cartSlice";
import { concatArrays } from "../../redux/slices/cartSlice";

function ProductCard({ props }) {
  const { id, name, brand, price, image, rating, completed } = props;
  const [ carrito, setCarrito] = useState([])
  var totalPrice = useSelector(state => state.cart.cartTotalAmount)
  var localStorageCarrito = useSelector(state => state.cart.cartItems)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = 'pepito'
  const cartid = uuidv4()
  const cartId = 'dcd61acf-9e3e-42c3-953a-aeb4b2115cbe'
  const pepeId = 'byNoKTMnl6eE0JtDcGJ9WP4iZZJ3'

  const cartDb = useSelector((state) => state.cart.userCart.list)

  const deletePhone = (i) => {
    dispatch(deleteProduct(i));
  };

  // funciona hardcodeando

  // useEffect(()=> {
  //    if(pepeId){
  //     axios.post('/carts', {
  //       userId:pepeId,
  //       totalPrice
  //     })
  //     axios.get(`/carts/${pepeId}`).then(res => console.log(res.data))
  //    }
  // },[])

  ///////////////////

  useEffect(()=>{
    dispatch(getItemCart(cartId))
    var aux = axios.get(`/cartDetails/${cartId}`)
    console.log(aux.data)
    console.log(cartDb)
    dispatch(concatArrays(cartDb))
    console.log(localStorageCarrito)
  }, [])

  const handleAddToCart = (product) => {
    console.log(product)
    console.log("adding to cart")
    console.log(props)
    
    //http://localhost:3001/cartDetails
    if (pepeId) {
      const obj = {phoneId:id, price:price,quantity:1, cartId: cartId}
      carrito.push(obj)
      // setCarrito({phoneId:id, price:price,quantity:1, cartId: cartId})
      console.log(carrito)
      console.log(obj)
      dispatch(createItemCart(carrito))
      //axios.post('/cartDetails', carrito)
      console.log("posting")
      dispatch(addToCart(product))

  }
  
    
        //  navigate('/cart')

  }

  // const handleAddToCart = () => {
  //   if (userLogged.loggedIn) {
  //     axios({
  //       method: "post",
  //       url: `http://localhost:3100/users/${userId}/cart`, //cuando se cree el sistema de autentificacion el "1" deberia ser reemplazado por el id del usuario
  //       data: {
  //         idProducto: product.id,
  //         amount: 1,
  //       },
  //     });
  //   } else {
  //     var storage = JSON.parse(localStorage.getItem("guestCart"));
  //     if (storage == null) {
  //       storage = [];
  //     }

  //     var doesExist = storage.findIndex((e) => e.productId === product.id);
  //     if (doesExist === -1) {
  //       var data = { productId: product.id, amount: 1 };
  //       storage.push(data);
  //     } else {
  //       storage[doesExist].amount += 1;
  //     }

  //     localStorage.setItem("guestCart", JSON.stringify(storage));
  //   }
  // };


  let defaultImage = "https://dummyimage.com/450x300/dee2e6/6c757d.jpg";

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <div className="badge bg-dark text-white position-absolute inner-card">
          Sale
        </div>

        <Link to={`/products/${id}`}>
          <img
            className="card-img-top"
            src={image || defaultImage}
            alt={`${brand} ${name}`}
          />
        </Link>

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{`${brand} ${name}`}</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              {/* Para mostrar rating con estrellas */}
              {rating && rating > 0
                ? Array.from(new Array(rating))?.map((_, i) => (
                    <div key={i} className="bi-star-fill"></div>
                  ))
                : ""}
            </div>
            {price ? (
              <>
                <span className="text-muted text-decoration-line-through">
                  ${price}
                </span>
                ${Math.round(price - (price * 15) / 100)}{" "}
              </>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          {/* <div className="text-center">
            <a className="btn btn-outline-dark mt-auto" href="cart">
              Add to cart
            </a>
          </div> */}
          <div className="text-center">
            
            <button className="btn btn-primary" onClick={()=> handleAddToCart(props)}>Add to card</button>
          </div>
        </div>

        {/* <div>
          <button className="btn btn-danger" onClick={() =>deletePhone(id)}>Delete</button>
        </div> */}
      </div>
    </div>
  );
}

export default ProductCard;
