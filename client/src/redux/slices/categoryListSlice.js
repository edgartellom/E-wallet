import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState ={
    categories: [],
}

export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async (dispatch) => {
        
    })

const categoriesSlice = createSlice({
        name: "categories",
        initialState,
        reducers: {

        }
    });

export default categoriesSlice.reducer;
