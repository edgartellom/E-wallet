import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProductList } from "../../redux/slices/productListSlice";

const Carrusel = () => {
  const dispatch = useDispatch();
  let list = useSelector((store) => store.product.allProducts);

  let primero = list[8];
  console.log(primero);

  useEffect(() => {
    if (!list.length) dispatch(getProductList());
  }, []);

  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://armoto.vtexassets.com/assets/vtex.file-manager-graphql/images/9b2486b5-c587-4a9a-9684-e4589abfda35___167f1af0f01a7bc86584f25f511af9de.jpg"
              className="d-block w-100"
              alt="img"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://armoto.vtexassets.com/assets/vtex.file-manager-graphql/images/63442328-71b2-49d3-b927-189a5b230017___4a36237f444d664cce8867aa0e9b281b.jpg"
              className="d-block w-100"
              alt="img"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="cointeiner">
        <div>
          {/* <img src={primero.image} alt="" />
          <h2>{primero.brand}</h2> */}
        </div>
      </div>
    </>
  );
};

export default Carrusel;
