import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProductList } from "../../redux/slices/productListSlice";


const Carrusel = () => {
  const dispatch = useDispatch();
  let list = useSelector((store) => store.product.allProducts);
  console.log(list);
 let primeros = list.slice(0, 2);
  //let segundos = list.slice(20, 23);
  //let terceros = list.slice(30, 33);
  //console.log(primeros);
  useEffect(() => {
    if (!list.length) dispatch(getProductList());
  }, []);

  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
       <img src=""alt="" />
        </div>
        <div className="carousel-item">
      <div></div>
        </div>
        <div className="carousel-item">
       <div></div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrusel;