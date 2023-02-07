import React, { useState } from "react";
import Product_Card from "../product_card/product_card";
import NotFound from "../not_found/not_found";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../redux/slices/productList.slice";
import Filter from "../Filters";

function Products_List() {
  const dispatch = useDispatch();
  let loading = useSelector((store) => store.product.status);
  let products = useSelector((store) => store.product.list);
  const [order, setOrder] = useState("")
  const [currentPage, setCurrentPage] = useState(1)


  React.useEffect(() => {
    if (!products.length) dispatch(getProductList());
  }, []);

  //console.log("products", products);

  return (
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

      


      {loading === "loading" ? (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
          alt="Loading..."
        />
      ) : products && products.length > 0 ? (
        products.map((product) => {
          return <Product_Card key={product.id} props={product} />;
        })
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default Products_List;
