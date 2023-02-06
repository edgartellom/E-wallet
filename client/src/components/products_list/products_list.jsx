import React from "react";
import Product_Card from "../product_card/product_card";
import { useDispatch, useSelector } from "react-redux";
import { add, getTodos } from "../../redux/slice";
import NotFound from "../not_found/not_found";

function Products_List() {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.counter.loading);
  let products = useSelector((store) => store.counter.products);

  React.useEffect(() => {
    if (!products.length) dispatch(getTodos());
  }, []);

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
