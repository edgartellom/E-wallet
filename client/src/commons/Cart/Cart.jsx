import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
const Cart = () => {

    const { cartTotalQuantity } = useSelector((state) => state.cart);
    return (<div>
        <form className="d-flex">
            <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                <Link to= "/cart">
                   Cart 
                </Link>
                
                <span className="badge bg-dark text-white ms-1 rounded-pill">{cartTotalQuantity}</span>
            </button>
        </form>
    </div>)
}

export default Cart;