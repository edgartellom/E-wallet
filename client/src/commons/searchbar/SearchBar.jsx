import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
// import { getProductsBySearch } from '../../redux/slice'




const SearchBar = () => {
  const [search, setSearch] = useState('');
  //const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(getProductsBySearch(search));
    navigate('/products');
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={search}
        onChange={handleChange}
      />
      <button className="btn" type="submit">
        <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg></i>
      </button>
    </form>
  );
};


export default SearchBar;










/* 
Quiero crear un componente para buscar productos, para poder encontrar rápido los que quiero comprar. 

crear barras de búsqueda con bootstrap 5, para poder encontrar rápido los productos que quiero

*/
