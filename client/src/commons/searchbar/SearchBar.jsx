import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchList } from "../../redux/Slices/ProductList.slice";



const SearchBar = ({ props }) => {


  let [search, setSearch] = useState("")

  // useEffect(() => {
  //   if (!products.length) dispatch(getProductList());
  // }, []);


  let products = useSelector(store => store.product.list)


  const dispatch = useDispatch()

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault(e);
    dispatch(searchList(search))
    console.log(search)
    search = ""
  }



  return (
    <div >
      <form className="d-flex" role='search' onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Search phone..."
          value={search}
          onChange={handleChange}
        />
        
          <a onClick={handleSubmit} className="btn btn-light-secondary">
          <i className="bi bi-search"></i>
          </a>
      </form>
    </div>

  )
}


export default SearchBar;