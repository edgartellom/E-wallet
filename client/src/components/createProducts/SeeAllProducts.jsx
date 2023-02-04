import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, getTodos, updateProduct, deleteProduct } from "../../redux/slice";
function SeeAllProducts() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.counter.counter);
  const idle = useSelector((state) => state.counter.status);
  const products = useSelector((state) => state.counter.products);

  const adder = useSelector((state) => state.counter.adder);
  console.log(idle);
  console.log(products);

  const updateProduct = (e) => {
   // e.preventDefault()
  }

  const deletingProduct = (id) => {
    //e.preventDefault()
    console.log('deleting')
    dispatch(deleteProduct(id))
    
  }

  useEffect(() => {
    if (idle === "idle") {
      dispatch(getTodos());
    }

    dispatch(add());
  }, []);

  console.log(selector);
  console.log(selector[0]);
  console.log(adder);
  return (
    <div>
      {products.map((p, index) => {
        return (
          <div key={index}>
            <h2 onClick={()=>updateProduct(p.id)}>{p.name}</h2>
            {p.description}
            {p.price}
            <button onClick={()=>deletingProduct(p.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default SeeAllProducts;
