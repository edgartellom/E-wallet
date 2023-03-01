import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, decreaseCart, getTotals,removeFromCart, pushToCart} from "../../redux/slices/cartSlice";  
import { Link } from "react-router-dom";
import axios from 'axios'
import { getItemCart } from "../../redux/slices/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  var cart2 = useSelector((state) => state.cart.cartItems)
  const userCart = useSelector((state) => state.cart.userCart)
  const dispatch = useDispatch();

  console.log(userCart)

  const arr = [...cart.cartItems]
  var aux = []
  console.log(arr)

  const [carrito, setCarrito] = useState([])

  const pepeId = 'byNoKTMnl6eE0JtDcGJ9WP4iZZJ3'
  const cartId = 'dcd61acf-9e3e-42c3-953a-aeb4b2115cbe'

  useEffect(() => {
    //dispatch(getTotals());

    if(pepeId){
      const cartUser = axios.get('/cartDetails', pepeId).then(res => console.log(res.data))
      // const cartData = cartUser.data
      // cart = [...cart, cartData]
      // console.log(cartUser.data)
      // console.log(cartUser)
      
      //http://localhost:3001/cartDetails/dcd61acf-9e3e-42c3-953a-aeb4b2115cbe
    }

    const fetchCartDetails = async() => {
      if(cartId){
        const cartDetail = await axios.get(`http://localhost:3001/cartDetails/${cartId}`)
        setCarrito(cartDetail.data.list)
        console.log(cartDetail.data.list)
        console.log(carrito)
        console.log(cart.cartItems)
        
          aux = [...cart.cartItems, ...cartDetail.data.list]
          setCarrito(...aux)
          cart2 = [...cart2, ...cartDetail.data.list]
          console.log(cart2)
        console.log(aux)
        console.log(carrito)
        console.log(userCart)
        //dispatch(pushToCart(carrito))
        cart.cartItems.push(...cartDetail.data.list) //doesnt work
        //cart.cartItems = [...cart.cartItems, cartDetail.data.list ]
      }
    }
    // if(cartId){
    //   const cartDetails = 
    //                        .then(response => setCarrito(response.data))
    //    //cart.cartItems.push(cartDetails)
    //    console.log(carrito.list)
    //   // console.log(cart)
    //   console.log(cart.cartItems)
    //   // cart.cartItems.push(carrito)
    // }
    fetchCartDetails()
    console.log(aux)
   console.log(carrito)
    dispatch(getTotals());
    dispatch(getItemCart(cartId))
    console.log(userCart)
    console.log(cart2)
    // cart.cartItems = [...cart.cartItems, cartDetail.data.list]
   // cart.cartItems = [...cartItems, carrito]
  }, [cart, dispatch]);


  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart2.length === 0 ? ( ////////aux - cart.cartItems
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/products">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart2 &&                  //////////////
              cart2.map((cartItem) => ( ///////////
                <div className="cart-item" key={cartItem.id}> 
                  <div className="cart-product">
                    <img src={cartItem.image} alt={cartItem.name} />
                    <div>
                      <h3>{cartItem.name}</h3>
                      <p>{cartItem.desc}</p>
                      <button onClick={() => handleRemoveFromCart(cartItem)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">${cartItem.price}</div>
                  <div className="cart-product-quantity">
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleAddToCart(cartItem)}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    ${cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-summary">
            
            <button className="clear-btn" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button>Check out</button>
              <div className="continue-shopping">
                <Link to="/products">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;