import React from 'react'
import { getProductList } from '../../redux/slices/productList.slice'
import { useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import { createProducts } from '../../redux/slices/productList.slice'
import { useNavigate } from 'react-router-dom'

function CreatePhones() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const selector = useSelector((state) => state.product.list)

    const [input, setInput] = useState({
      category:'',
       name:'',
        brand: "",   
        price:'',
        image:'',
      });
    
      const [errors, setErrors] = useState([]);

  const verify = (input) => {       ///[^A-Z a-z0-9]/ 
    let error = {}
    if((!input.name) || (input.name.match(/\W/))) error.name = 'please fill out with no special character'
    if((!input.brand) || (input.brand.length<4)) error.brand = 'enter at least 4 words'
    if((!input.category) || (input.category.match(/\W/))) error.category = 'please fill out with no special character'

    if(input.price){
      const parsed = parseInt(input.price)
      if(!((Number.isInteger(parsed)))){
      
        error.price = "enter numbers only"
      }else if (parsed<1){
        error.price = 'enter a positive number'
      }
    }else{
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
          [e.target.name]:e.target.value
        })
    
        setErrors(verify({
          ...input,
          [e.target.name]:e.target.value
        }))
      }
    
  return (
    <div>CreatePhones
        <form onSubmit={createSubmit} >
        <h1 style={{textAlign:"center"}}>Create a Product</h1>

        <label htmlfor="category">Category: </label>
         <input 
          type="text"
          autoComplete="off"
          id="category"
          value={input.category}
          name="category"
          placeholder="enter a category (required)"
          onChange={changeHandle}
        /> 

        <label htmlfor="name">Name: </label>
        <input 
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

        <label htmlfor="brand">Brand: </label>
        <input 
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

        <label htmlfor="price">Price: </label>
        <input 
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

        <label htmlfor="image">URL: </label>
        <input 
          type="text"
          autoComplete="off"
          value={input.image}
          name="image"
          id="image"
          placeholder="enter a url (optional)"
          onChange={changeHandle}
        />
        
        <br /><br />
        <button disabled={!input.brand || !input.name || !input.category} type="submit">Create a Recipe</button>
       
      </form>
    </div>
  )
}

export default CreatePhones

