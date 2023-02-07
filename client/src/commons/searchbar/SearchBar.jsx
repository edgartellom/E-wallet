import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchProducts } from "../../redux/Slices/SearchProducts.slice";
import {getProductList} from "../../redux/Slices/ProductList.slice";


const SearchBar = ({props}) => {

  let [search, setSearch] = useState("")

  useEffect(() => {
    if (!products.length) dispatch(getProductList());
  }, []);


  let products = useSelector(store => store.product.list)
  

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setSearch(e.target.value)
    console.log(search)

  }

  const handleSubmit = (e) => {
    e.preventDefault(e);
    dispatch(getSearchProducts(search))
    console.log(search)
    search = ""
  }
  

  
  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search phone..."
          value={search}
          onChange={handleChange}
        />
        <button  className= "btn" type="submit">
          <i><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg></i>
        </button>
      </form>
    </div>
  
  )
}


export default SearchBar;