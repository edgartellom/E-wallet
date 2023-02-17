import React from "react";
import { getProductList } from "../../redux/slices/productListSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createProducts } from "../../redux/slices/productListSlice";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import './form_style.css';
import { getCategory } from "../../redux/slices/categorySlice";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
   width: 500px;
`;

const Input = styled.input`
 padding: 10px;
  margin: 10px 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #e9ecef;
`;

const Select = styled.select`
 padding: 10px;
  margin: 10px 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #343a40;
  color: white; 
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;


function CreatePhones () {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.product.allProducts);
  const category = useSelector((state) => state.category.categories);

  console.log(category)

  const colored = (function color () {
    let color = selector?.map(c => c.color).flat()
    const uniqueColor = [...new Set(color)]
    // console.log("colors", uniqueColor)
    return uniqueColor.sort()
  })()


  const categories = [
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
    color: []
  });

  const [errors, setErrors] = useState([]);

  const verify = (input) => {
    ///[^A-Z a-z0-9]/
    let error = {};
    if (!input.name || input.name.match(/\W/))
      error.name = "please fill out with no special character";
    if (!input.brand || input.brand.length < 4)
      error.brand = "enter at least 4 words";
    if (input.image && !input.image.match(/^(http|https):\/\/[^ "]+$/)) {
      error.image = "Please enter a valid URL.";
    } else {
      return error;
    }
    if (input.categories.length === 0) {
      error.categories = "Please select at least one category.";
    } else {
      return error;
    };
    if (input.color.length === 0) {
      error.color = "Please select at least one color.";
    } else {
      return error;
    };
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
    dispatch(getCategory());
  }, [dispatch]);



  const createSubmit = (e) => {
    e.preventDefault();
    console.log(input, "input50");
    dispatch(createProducts(input));
    console.log("product", createProducts(input)())
    dispatch(setInput({
      name: "",
      brand: "",
      price: "",
      image: "",
      categories: [],
      color: []
    }))
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
    if (!input.category.includes(e.target.value)) {
      alert(e.target.value);
      setInput({
        ...input,
        categories: [...input.categories, e.target.value],

      });
    }
    console.log(e.target.value)
  };

  const selectHandleColor = (e) => {
    if (!input.color.includes(e.target.value)) {
      setInput({
        ...input,
        color: [...input.color, e.target.value]
      })
    }
  }

  return (
    <div>
      <h1 className="form__style" >Create a Product </h1>
      <div className="form__style">
        <FormContainer onSubmit={createSubmit}>
          <br /><br />
          <label className="fw-bold" htmlFor="name">Name: </label>
          <Input
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

          <label className="fw-bold" htmlFor="brand">Brand: </label>
          <Input
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

          <label className="fw-bold" htmlFor="price">Price: </label>
          <Input
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

          <label className="fw-bold" htmlFor="image">URL: </label>
          <Input
            type="text"
            autoComplete="off"
            value={input.image}
            name="image"
            id="image"
            placeholder="enter a url (optional)"
            onChange={changeHandle}
          />
          {errors.image && <h6>{errors.image}</h6>}
          <br />
          <Select className="fw-bold" defaultValue="Categories" onChange={(e) => selectHandle(e)}>
            <option className="fw-bold" disabled>Categories</option>
            {category.map((t, index) => (
              <option key={index} value={t.name}>
                {t.name}
              </option>
            ))}
          </Select>
          {errors.categories && <h6>{errors.categories}</h6>}
          <br />
          <Select className="fw-bold" defaultValue="Colors" onChange={(e) => selectHandleColor(e)}>
            <option className="fw-bold" disabled>Colors</option>
            {colored && colored.map((c, index) => (
              <option key={index} value={c}>
                {c}
              </option>
            ))}
          </Select>
          {errors.color && <h6>{errors.color}</h6>}
          <br />
          <span className="alert-info m-lg-4">Selected colors: {[...input.color].map(c => (c + ', '))} </span>
          <br />
          <Button
            disabled={
              !input.brand ||
              errors.brand ||
              !input.name ||
              errors.name
            }
            type="submit"
          >
            Create a New Phone
          </Button>
        </FormContainer>
        <br /><br /><br /><br /><br /><br />
      </div>
    </div>
  );
}

export default CreatePhones;
