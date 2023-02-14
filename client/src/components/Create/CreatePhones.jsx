import React from "react";
import { getProductList } from "../../redux/slices/productListSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createProducts } from "../../redux/slices/productListSlice";
import { useNavigate } from "react-router-dom";
import categories from "../../../../api/src/category.json";

function CreatePhones() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.product.list);

  const category = [
    "touchscreen keyboard",
    "qwerty keyboard",
    "foldable cell phone",
    "rugged",
    "dual-screen",
  ];
  const [input, setInput] = useState({
    name: "",
    brand: "",
    price: "",
    image: "",
    categories: [],
  });

  const [errors, setErrors] = useState([]);

  const verify = (input) => {
    ///[^A-Z a-z0-9]/
    let error = {};
    if (!input.name || input.name.match(/\W/))
      error.name = "please fill out with no special character";
    if (!input.brand || input.brand.length < 4)
      error.brand = "enter at least 4 words";

    if (input.price) {
      const parsed = parseInt(input.price);
      if (!Number.isInteger(parsed)) {
        error.price = "enter numbers only";
      } else if (parsed < 1) {
        error.price = "enter a positive number";
      }
    } else {
      error.price = "please fill out this field";
    }
    return error;
  };

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  console.log(selector);

  const createSubmit = (e) => {
    e.preventDefault();
    console.log(input, "input50");
    dispatch(createProducts(input));
    navigate("/");
  };

  const changeHandle = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      verify({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const selectHandle = (e) => {
    if (!input.categories.includes(e.target.value)) {
      alert(e.target.value);
      setInput({
        ...input,
        categories: [...input.categories, e.target.value],
      });
    }
  };

  return (
    <div>
      <form onSubmit={createSubmit}>
        <h1 style={{ textAlign: "center" }}>Create a Product</h1>


        <label htmlFor="name">Name: </label>
        <input
          type="text"
          autoComplete="off"
          value={input.name}
          name="name"
          id="name"
          placeholder="enter a name (required)"
          onChange={changeHandle}
        />
        {errors.name && <h6>{errors.name}</h6>}
        <br />

        <label htmlFor="brand">Brand: </label>
        <input
          type="text"
          autoComplete="off"
          value={input.brand}
          name="brand"
          id="brand"
          placeholder="enter a brand (required)"
          onChange={changeHandle}
        />

        {errors.brand && <h6>{errors.brand}</h6>}
        <br />

        <label htmlFor="price">Price: </label>
        <input
          type="text"
          autoComplete="off"
          value={input.price}
          id="price"
          name="price"
          placeholder="enter the price (optional)"
          onChange={changeHandle}
        />

        {errors.price && <h6>{errors.price}</h6>}
        <br />

        <label htmlFor="image">URL: </label>
        <input
          type="text"
          autoComplete="off"
          value={input.image}
          name="image"
          id="image"
          placeholder="enter a url (optional)"
          onChange={changeHandle}
        />

        <select defaultValue="Categories" onChange={(e) => selectHandle(e)}>
          <option disabled>Categories</option>
          {category.map((t, index) => (
            <option key={index} value={t}>
              {t}
            </option>
          ))}
        </select>

        <br />
        <br />
        <button
          className="btn btn-success"
          disabled={
            !input.brand ||
            errors.brand ||
            !input.name ||
            errors.name 
          }
          type="submit"
        >
          Create a Recipe
        </button>
      </form>
    </div>
  );
}

export default CreatePhones;
