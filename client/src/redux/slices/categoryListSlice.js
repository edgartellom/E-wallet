import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState ={
    list: []
}

export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async (dispatch) => {
        try {
            const categories = await axios.get('/categories')
            return categories.data;
        }catch(err){
            console.log(err);
            return [];
        }
    })

const categoriesSlice = createSlice({
        name: "categories",
        initialState,
        reducers: {

        },
        extraReducers: (builder)=>{
            builder
            .addCase(fetchCategories.fulfilled, (state, action)=>{
                state.list=action.payload;
            });
        }
    });

export default categoriesSlice.reducer;

