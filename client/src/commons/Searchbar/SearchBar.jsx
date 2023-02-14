import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchList, updateSearchWords } from "../../redux/Slices/productListSlice";



const SearchBar = ({ props }) => {


  let [search, setSearch] = useState("")
  const navigate= useNavigate();
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault(e);
    dispatch(updateSearchWords(search));
    
    dispatch(searchList(search))
    navigate("/products")
    search = ""
  }



  return (
    <div >
      <form className="d-flex" role='search' onSubmit={(e)=>handleSubmit(e)}>
        <input
          className="form-control"
          type="text"
          placeholder="Search phone..."
          value={search}
          onChange={(e)=>handleChange(e)}
        />
        
          <a onClick={(e)=>handleSubmit(e)} className="btn btn-light-secondary">
          <i className="bi bi-search"></i>
          </a>
      </form>
    </div>

  )
}


export default SearchBar;