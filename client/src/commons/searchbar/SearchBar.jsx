import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductList } from "../../redux/slices/productList.slice";
import { getSearchProducts } from "../../redux/Slices/SearchProducts.slice";
import { filtros } from "../../redux/slices/productList.slice";

function SearchBar() {
  const [search,setSearch ] = useState("");
  const { list, loading, error } = useSelector((state) => state.searchProducts);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length > 1) {
      dispatch(filtros(search));
      setSearch("");
    } else {
      alert("La búsqueda debe tener más de un carácter");
    }
  };

  const handleChange = (e) => {
    e.preventDefault(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Insert name"
        value={search}
        onChange={(e)=>handleChange(e)}
      />
      <button type="submit">
        <span>
          <strong>Buscar!</strong>
        </span>
      </button>
     
    </form>
 </div> )
}

export default SearchBar;