import {createSlice} from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
    counter:[],
    status:'idle',
    error:null,
    adder:0,
    products:[{
        id:1,
        name:"name1",
        description:"description1",
        price: 0,
        pictures: "pic1"
    },
    {
      id:2,
      name:"name2",
      description:"description2",
      price: 10,
      pictures: "pic2"
  },
    
    ],
    category:[]  
}

export const getTodos = createAsyncThunk(
    "counter/getCounter",
    async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
            console.log(response)
            console.log(response.data)
            
            return response.data;
            //return [...response.data]
        } catch (error) {
            return console.log("error from redux")
        }
    }
);




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
        });
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getTodos.fulfilled, (state, action) => {
          // Add user to the state array
          state.counter = action.payload
          
          
          
          //state.counter.push(action.payload)
        })
      },
   
})

export default counterSlice.reducer
export const {add, addition, addProduct, deleteProduct, updateProduct} = counterSlice.actions
