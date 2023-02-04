import {createSlice} from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
    counter:[],
    status:'idle',
    error:null,
    adder:0
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


    // extraReducers: (builder) => {
    // builder.addCase(getTodos.pending, (state) => {
    //     state.loading = true;
    // });
    // builder.addCase(getTodos.fulfilled, (state, action) => {
    //     state.todos= action.payload;
    //     state.loading = false;
    // });

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
export const {add, addition} = counterSlice.actions
