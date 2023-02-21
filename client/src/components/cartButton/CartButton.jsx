import { Link } from "react-router-dom";

const CartButton = () => {
  return (
    <div>
      <form className="d-flex">
        <Link to="/cart">
          <button className="btn btn-outline-dark" type="submit">
            <i className="bi-cart-fill me-1"></i>
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              0
            </span>
          </button>
        </Link>
      </form>
    </div>
  );
};

export default CartButton;
