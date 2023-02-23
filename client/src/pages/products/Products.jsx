import { ProductsList, Sortable } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../redux/slices/productListSlice";

const Products = () => {
  const dispatch = useDispatch();
  let search = useSelector((store) => store.product.searchWords);

  if (search.length === 0) {
    dispatch(getProductList());
  }

  return (
    <>
      <Sortable></Sortable>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <ProductsList />
        </div>
      </section>
    </>
  );
};

export default Products;
