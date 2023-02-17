import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    categories:[1]
}

const categorySlice = createSlice({
    name:'category',
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(getCategory.fulfilled, (state, action) => {
        state.categories = action.payload    
        })
    }
})

export const getCategory = createAsyncThunk(
    "category/getCategory",
    async ( dispatch) => {

        try{
            const c = await axios.get('https://63dda862df83d549cea43a9c.mockapi.io/api/v1/categories')
            return c.data

        }catch(e){
            console.log(e)
            console.log("redux not fetching categories")
            return []
        }
         
    }
)

export default categorySlice.reducer