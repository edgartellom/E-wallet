import {createSlice} from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
    counter:[],
    status:'idle',
    error:null,
    adder:0,
    products:[{  
      // possible attritubes:
      //id,brand,model,price,image,detail
        id:'1',
        brand:'samsung',
        model:"galaxy s22",
        price: 0,
        image: "",
        detail:''
    },
    {
      id:'2',
      brand:'samsung',
      model:"galaxy s23",
      price: 0,
      image: "",
      detail:''
  },
    
    ],
    category:[],
    otroArray: []  
}

export const getTodos = createAsyncThunk(
    "counter/getCounter",
    async () => {
        try {
            const response = await axios.get("http://localhost:3001/phones");
            console.log(response)
            console.log(response.data)
            
            return response.data;
            //return [...response.data]
        } catch (error) {
            return console.log("error from redux")
        }
    }
);

export const createProducts = createAsyncThunk(
   'products/createProducts',
   async (payload) => {
      try{
         const res = await axios.post("CreateURLHere", payload)
         return res
      }catch(e){
         return console.log("error trying to create")
      }
   }
)



// case  'SEARCH_NAME':
//             console.log("getting name")
//             // const recipeName = state.allRecipes
//             return{
//                 ...state,
//                 recipes:action.payload,
//                 // allRecipes: recipeName  ///
//             }

//             case 'FILTER_SEARCH':
//                 const allProducts = state.allRecipes //state.counter.products
//                 const filtered = allProducts.filter((recipe) => {
//                  let name = recipe.title.toLowerCase();
//                  if (name.includes(action.payload)) return recipe;
//                 //name.includes(action.payload)
              
//                 })
                        
//                  return{
//                      ...state,
//                      recipes: filtered 
//                     }

//                     export const getRecipesByName = (name) =>{
//                      return async function(dispatch){
//                          try{
//                              const recipe = await axios.get(`${host}/recipes?name=${name}`)
//                              return dispatch({
//                                  type:'SEARCH_NAME',
//                                  payload:recipe.data
//                              })
//                          }catch(e){
//                              console.log(e)
//                          }
//                      }
//                  }
                 
//                  export const searchBarName = (toBeFiltered) => {
//                      return{
//                          type:'FILTER_SEARCH',
//                          payload:toBeFiltered
//                      }
//                  }


export const counterSlice = createSlice({
   name:'counter',
   initialState,
   reducers:{

     add: (state, action) => {
        console.log(state, action)
        state.adder++
     },
     addition:(state, action) => {
        state.adder += action.payload   
     },
     addProduct: (state, action) => {
        console.log(state, action)
        state.products.push(action.payload)
     },
    
     deleteProduct:(state,action) => {
        const productFound = state.products.find(task => task.id === action.payload)
        if(productFound){
           state.products.splice(state.products.indexOf(productFound), 1)
        }
     },
     updateProduct:(state, action) => {
        const {id, name,description, price} = action.payload
        const foundProduct = state.products.find(p => p.products.id === id)
        if(foundProduct){
           foundProduct.pictures = pictures
           foundProduct.description = description
           foundProduct.price = price
        }
     }
    },

     extraReducers: (builder) => {
        builder.addCase(getTodos.pending, (state) => {
            state.status = 'loading'
            //logic here
        });
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getTodos.fulfilled, (state, action) => {
          // Add user to the state array
          state.counter.push(action.payload)  
          //state.counter.push(action.payload)
        }),
        builder.addCase(createProducts.fulfilled, (state) =>{
            //state.counter.products.push(action.payload)
            state.counter = action.payload
            //state.counter.push(action.payload)
            // try either 
        } )
      },
   
})

export default counterSlice.reducer
export const {add, addition, addProduct, deleteProduct, updateProduct} = counterSlice.actions
