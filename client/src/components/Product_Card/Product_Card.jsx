import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../redux/slices/productListSlice";

function Product_Card({ props }) {
  const { id, name, brand, price, image, rating, completed } = props;
  const dispatch = useDispatch()

  const deletePhone = (i) => {
    dispatch(deleteProduct(i))
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
            <a className="btn btn-outline-dark mt-auto" href="cart">
              Add to cart
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Product_Card;
