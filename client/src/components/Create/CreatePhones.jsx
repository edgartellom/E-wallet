import React from 'react'
import { getProductList } from '../../redux/slices/productListSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { createProducts } from '../../redux/slices/productListSlice'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import './form_style.css'


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

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.product.list)

  const [input, setInput] = useState({
    category: '',
    name: '',
    brand: "",
    price: '',
    image: '',
  });

  const [errors, setErrors] = useState([]);

  const verify = (input) => {       ///[^A-Z a-z0-9]/ 
    let error = {}
    if ((!input.name) || (input.name.match(/\W/))) error.name = 'please fill out with no special character'
    if ((!input.brand) || (input.brand.length < 4)) error.brand = 'enter at least 4 words'
    if ((!input.category) || (input.category.match(/\W/))) error.category = 'please fill out with no special character'

    if (input.price) {
      const parsed = parseInt(input.price)
      if (!((Number.isInteger(parsed)))) {

        error.price = "enter numbers only"
      } else if (parsed < 1) {
        error.price = 'enter a positive number'
      }
    } else {
      error.price = "please fill out this field"
    }
    return error
  }

  useEffect(() => {
    dispatch(getProductList())
  }, [])

  console.log(selector)

  const createSubmit = (e) => {
    e.preventDefault()
    console.log(input, "input50")
    dispatch(createProducts(input))
    navigate('/')
  }

  const changeHandle = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })

    setErrors(verify({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div >
      <h1 className="form__style" >Create a Product</h1>
    <div className="form__style">
      <FormContainer onSubmit={createSubmit} >
        <br /><br />
        <label className="fw-bold" htmlFor="category">Category: </label>
        <Input
          type="text"
          autoComplete="off"
          id="category"
          value={input.category}
          name="category"
          placeholder="enter a category (required)"
          onChange={changeHandle}
        />
        {errors.category && (<h6>{errors.category}</h6>)}
        <br />
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
        {errors.name && (<h6>{errors.name}</h6>)}
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


        {errors.brand && (<h6>{errors.brand}</h6>)}
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

        {errors.price && (<h6>{errors.price}</h6>)}
        <br />

        <label className="fw-bold" htmlFor="brand">Color: </label>
        <Input
          type="text"
          autoComplete="off"
          value={input.brand}
          name="color"
          id="color"
          placeholder="enter a color (required)"
          onChange={changeHandle}
        />
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

        <br />
        <Button disabled={!input.brand || !input.name || !input.category} type="submit">Create a New Phone</Button>
      </FormContainer>
      <br /><br /><br /><br /><br /><br />
      </div>
    </div>
  )
}

export default CreatePhones

