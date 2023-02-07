import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUSES } from "./ProductById.slice";

let initialState = {
list: [],
status: "",
error: null,
};

export const SearchProductsSlice = createSlice({
name: "searchProducts",
initialState,
reducers: {
setSearchProducts: (state, action) => {
state.list = action.payload;
},
setSearchProductsLoading: (state) => {
state.status = STATUSES.LOADING;
},
setSearchProductsError: (state, action) => {
state.status = STATUSES.ERROR;
state.error = action.payload;
},
},
});

export const {
setSearchProducts,
setSearchProductsLoading,
setSearchProductsError,
} = SearchProductsSlice.actions;

export default SearchProductsSlice.reducer;

export const getSearchProducts = createAsyncThunk(
"searchProducts/getSearchProducts",
async (search, { dispatch }) => {
try {
dispatch(setSearchProductsLoading());
const response = await axios.get("http://localhost:3001/phones");
const filteredResponse = response.data.filter((product) => {
if (
product.brand.toLowerCase().includes(search.toLowerCase()) ||
product.name.toLowerCase().includes(search.toLowerCase())
)
return product;
});console.log(filteredResponse);
dispatch(setSearchProducts(filteredResponse));
} catch (error) {
dispatch(setSearchProductsError(error.message));
}
}
);