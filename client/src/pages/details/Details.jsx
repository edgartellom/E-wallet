import { useState, useEffect } from "react";
import { getProductById } from "../../redux/Slices/ProductById.slice";
import { STATUSES } from "../../redux/Slices/ProductById.slice";
import { useDispatch, useSelector } from "react-redux";
import "./Details.css";
import { useParams } from "react-router-dom";
import Product_Deatils_Tab from "../product_details_tab/product_details_tab";

const Details = () => {
  const dispatch = useDispatch();
  const { product, productStatus } = useSelector((state) => state.productById);
  const { id } = useParams();

  useEffect(() => {
    console.log("estoy ejecutandome, effect");
    dispatch(getProductById(id));
  }, [dispatch, id]);

  if (productStatus === STATUSES.LOADING) {
    return (
      <>
        <h3>Loading ...</h3>
      </>
    );
  }

  if (productStatus === STATUSES.ERROR) {
    return (
      <>
        <h3>Something went wrong</h3>
      </>
    );
  }

  return (
    <>
      <main className="main">
        {/* breadcrumb */}
        <nav className="breadcrumb-nav border-0 mb-0">
          <div className="container d-flex aling-items-center">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/">Products</a>
              </li>
              <li className="breadcrumb-item active">
                <a href="/">{product.model}</a>
              </li>
            </ol>
          </div>
        </nav>

        {/* contenido principal */}
        <div className="page-content">
          <div className="container">
            <div className="product-details-top">
              <div className="row">
                <div className="col-md-6">
                  <div className="product-gallery product-gallery-vertical">
                    <div className="row">
                      <figure className="product-main-image">
                        <img src={product.image} />
                      </figure>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="product-details">
                    <h1 className="product-title">{product.model}</h1>
                    <h3 className="product-subtitle">{product.brand}</h3>
                  </div>
                  <div className="rating-container">
                    <div className="ratings">
                      <div className="ratings-val">
                        <span>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star"></i>
                        </span>
                      </div>
                    </div>
                    <a className="ratings-text" href="#product-reviews">
                      {"(2 reviews)"}
                    </a>
                  </div>
                  <div className="product-price">{"$ " + product.price}</div>
                  <div className="product-content">
                    <div className="details-filter-row details-row-size">
                      <label className="">colors: </label>
                      <div className="select-custom">
                        <select className="form-control" name="size" id="size">
                          {product.color?.map((i, index) => (
                            <option value={i} key={index}>
                              {i}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="product-details-action">
                    <a href="#" className="btn-product btn-cart">
                      <span>
                        <i className="bi bi-cart-plus"></i> add to cart
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <Product_Deatils_Tab />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Details;
