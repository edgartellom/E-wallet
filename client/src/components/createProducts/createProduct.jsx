// import React from "react";
// import { useState, useEffect } from "react";

// import { useDispatch, useSelector } from "react-redux";
// import { getTypes, createRecipes } from "../../redux/action";
// import { useHistory, useParams } from "react-router-dom";
// import {Link} from 'react-router-dom'

// import axios from "axios";



// function Validate() {

//   const dispatch = useDispatch();
//   const history = useHistory()
//   const types = useSelector((state) => state.types);
//   const params = useParams()
//   const recipeDb = useSelector((state) => state.recipesDb)
//   const recipes = useSelector((state) => state.allRecipes)
  
  

//   const [input, setInput] = useState({
//     name: "",
//     summary: "",
//     healthScore:'',
//     steps:'',
//     img:'',
//     diets:[]
//   });

//   const [errors, setErrors] = useState([]);

  

//   const verify = (input) => {       ///[^A-Z a-z0-9]/ 
//     let error = {}
//     if((!input.name) || (input.name.match(/\W/))) error.name = 'please fill out with no special character'
//     if((!input.summary) || (input.summary.length<4)) error.summary = 'enter at least 4 words'
//     if((!input.steps) || (input.steps.length<6)) error.steps = 'enter at least 6 words'
//     if(input.healthScore){
//       const parsed = parseInt(input.healthScore)
//       if(!((Number.isInteger(parsed)))){
      
//         error.healthScore = "enter numbers only"
//       }else if (parsed<1){
//         error.healthScore = 'enter a positive number'
//       }
//     }else{
//       error.healthScore = "please fill out this field"
//     }
//     return error
//   }





//   useEffect(() => {
//     dispatch(getTypes());
    
//     if(params.id && recipeDb){  //UPDATE
//       setInput(recipeDb.find((i) => i.id === params.id))
//     }
//   }, []);

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

//   const changeHandle = (e) => {
//     //const nameFixed = e.target.value.replace(/[^a-zA-Z]/, '') //(line58).replace(/[^a-zA-Z]/, '')
//     setInput({
//       ...input,
//       [e.target.name]:e.target.value
//     })

//     setErrors(verify({
//       ...input,
//       [e.target.name]:e.target.value
//     }))


//     if(recipes.find(r => r.name.toLowerCase() === e.target.value.toLowerCase()))
//       setErrors({
//         ...input,
//         [e.target.name]: 'this recipe is already on the API or created'
//       })
//   }



//   const selectHandle = (e) => {
//     if(!input.diets.includes(e.target.value)){
//       alert(e.target.value)
//       setInput({
//         ...input,
//         diets: [...input.diets, e.target.value]
//       })
//     }
   
//   }


//     //console.log(errors)
//   return (
//     <div className="validateContainer">
//       <di>
//         <Link to ="/Home" className="homeButton">Home</Link>
//       </di>

      

//       <form className="formContainer" onSubmit={submitHandle}>
//         <h1 style={{textAlign:"center"}}>Create a Recipe</h1>

//         <input className="inputValidate"
//           type="text"
//           autoComplete="off"
//           value={input.name}
//           name="name"
//           placeholder="enter a name"
//           onChange={changeHandle}
//         />
        
//         {/* {!input.name?<h6>please fill out this field</h6>:<></>} */}
//         {errors.name && (<h6>{errors.name}</h6>)}
        
//         <input className="inputValidate"
//           type="textArea"
//           autoComplete="off"
//           value={input.summary}
//           name="summary"
//           placeholder="enter a summary"
//           onChange={changeHandle}
//         />
//         {/* {!input.summary?<h6>please fill out this field</h6>:<></>} */}
//         {errors.summary && (<h6>{errors.summary}</h6>)}
        
//         <input className="inputValidate"
//           type="text"
//           autoComplete="off"
//           value={input.healthScore}
//           name="healthScore"
//           placeholder="enter a score for health"
//           onChange={changeHandle}
//         />
//         {/* {!input.healthScore?<h6>please fill out with a positive number</h6>:<></>} */}
//         {errors.healthScore && (<h6>{errors.healthScore}</h6>)}
        
//         <input className="inputValidate"
//           type="text"
//           autoComplete="off"
//           value={input.steps}
//           name="steps"
//           placeholder="enter the steps"
//           onChange={changeHandle}
//         />
        
//         {errors.steps && (<h6>{errors.steps}</h6>)}
        
//         <select defaultValue='diets' onChange={(e) =>selectHandle(e)}>
//            <option disabled>diets</option>
//            {types?.map(t => <option key={t.name} value={t.name}>{t.name}</option>)} 
//         </select>

//         <br /><br />
//         <button disabled={!input.name || !input.summary || !input.steps || !input.healthScore} type="submit" className="createButton" >Create a Recipe</button>
       

//       </form>

    
      
      
//     </div>
//   );
// }

// export default Validate;
