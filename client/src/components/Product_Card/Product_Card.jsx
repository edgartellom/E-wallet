import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/slices/cartSlice";
import { deleteProduct, getProductList } from "../../redux/slices/productListSlice";
import { useNavigate } from "react-router-dom";

function Product_Card({ props }) {
  const { id, name, brand, price, image, rating, completed } = props;



  const dispatch = useDispatch()
  const navigate = useNavigate()
  //const list = useSelector((state) => state.products.list)

  const deletePhone = (i) => {
    dispatch(deleteProduct(i))
  }

  const handleAddToCart = (product) => {
    console.log(product)
    console.log("adding to cart")
    console.log(props)
    dispatch(addToCart(product))
    navigate('/cart')
  }

  

  let defaultImage = "https://dummyimage.com/450x300/dee2e6/6c757d.jpg";

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <div className="badge bg-dark text-white position-absolute inner-card">
          Sale
        </div>

        <Link to={`/phone/${id}`}>
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
          <div className="text-center">
            
            <button className="btn btn-primary" onClick={()=> handleAddToCart(props)}>Add to card</button>
          </div>
        </div>

        <div>
          <button className="btn btn-danger" onClick={() =>deletePhone(id)}>Hide</button>
        </div>
      </div>
    </div>
  );
}

export default Product_Card;
