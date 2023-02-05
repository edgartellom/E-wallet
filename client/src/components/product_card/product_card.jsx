function Product_Card({ props }) {
  const { id, title, brand, price, image, rating, completed } = props;

  let defaultImage = "https://dummyimage.com/450x300/dee2e6/6c757d.jpg";

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <div className="badge bg-dark text-white position-absolute inner-card">
          Sale
        </div>

        <a href={`/phone/${id}`}>
          <img
            className="card-img-top"
            src={image || defaultImage}
            alt={title}
          />
        </a>

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{title}</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              {/* Para mostrar rating con estrellas */}
              {Array.from(new Array(rating)).map((_, i) => (
                <div key={i} className="bi-star-fill"></div>
              ))}
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
