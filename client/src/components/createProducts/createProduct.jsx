import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getTodos } from "../../redux/slice";

//import { getTypes, createRecipes } from "../../redux/action";
// import { useParams } from "react-router-dom";
// import {Link} from 'react-router-dom'


function CreateProduct() {

  const dispatch = useDispatch();

  const products = useSelector((state) => state.counter.products)
  //const params = useParams()
//   const recipeDb = useSelector((state) => state.recipesDb)
//   const recipes = useSelector((state) => state.allRecipes)
  
  console.log(products)

  const [input, setInput] = useState({
    id:"",
    name: "",
    description: "",
    price:'',
    pictures:''
  });
 

  const [errors, setErrors] = useState([]);

  

  const verify = (input) => {       ///[^A-Z a-z0-9]/ 
    let error = {}
    if((!input.name) || (input.name.match(/\W/))) error.name = 'please fill out with no special character'
    if((!input.description) || (input.description.length<4)) error.description = 'enter at least 4 words'
    
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
    console.log(products)
    dispatch(getTodos())
    // if(params.id && recipeDb){  //UPDATE
    //   setInput(recipeDb.find((i) => i.id === params.id))
    // }

  }, []);

  console.log(products)
//   const submitHandle = (e) => {
//     e.preventDefault()
//     if(params.id && recipeDb){
//        axios.put(`http://localhost:3001/recipeDb:${params.id}`, input.name)
//       console.log("editing")
//     }else{
//       dispatch(createRecipes(input))
//       alert("Recipe Created")
//       history.push('/home')
//     }
   
//   }

  const createSubmit = (e) => {
    e.preventDefault()
    dispatch(addProduct(input))

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


    // if(recipes.find(r => r.name.toLowerCase() === e.target.value.toLowerCase()))
    //   setErrors({
    //     ...input,
    //     [e.target.name]: 'this recipe is already on the API or created'
    //   })  
  }


    
  return (
    <div>
      {/* <di>
        <Link to ="/" className="homeButton">Home</Link>
      </di> */}

      

      <form onSubmit={createSubmit} >
        <h1 style={{textAlign:"center"}}>Create a Product</h1>

        <input 
          type="number"
          autoComplete="off"
          value={input.id}
          name="id"
          placeholder="enter a id"
          onChange={changeHandle}
        />

        <input 
          type="text"
          autoComplete="off"
          value={input.name}
          name="name"
          placeholder="enter a name"
          onChange={changeHandle}
        />
        
        
        {errors.name && (<h6>{errors.name}</h6>)}
        
        <input 
          type="text"
          autoComplete="off"
          value={input.description}
          name="description"
          placeholder="enter a description"
          onChange={changeHandle}
        />
       
        
        {errors.description && (<h6>{errors.description}</h6>)}
        
        <input 
          type="text"
          autoComplete="off"
          value={input.price}
          name="price"
          placeholder="enter a price for the phone"
          onChange={changeHandle}
        />
        
        {errors.price && (<h6>{errors.price}</h6>)}
        

        <br /><br />
        <button disabled={!input.name || !input.description || !input.price} type="submit">Create a Recipe</button>
       
      </form>
    </div>
  );
}

export default CreateProduct;
