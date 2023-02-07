import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUSES } from "./ProductById.slice";

let initialState = {
  list: [],
  status: "",
  error: null,
  
};

export const ProductListSlice = createSlice({
  name: "ProductList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductList.pending, (state) => {
      state.status = STATUSES.LOADING;
    });

    builder.addCase(getProductList.fulfilled, (state, action) => {
      state.list = action.payload;
      state.status = STATUSES.IDLE;
    });

    builder.addCase(getProductList.rejected, (state, action) => {
      state.list = [];
      state.status = STATUSES.ERROR;
    });
    builder.addCase(filtros.fulfilled, (state, action)=>{
      console.log('aqui'+action.payload)
      state.list= action.payload
      state.status= STATUSES.IDLE;
    })
    builder.addCase(filtros.pending,(state)=>{
      state.status= STATUSES.LOADING
    })
  },
});

export default ProductListSlice.reducer;

export const getProductList = createAsyncThunk(
  "product/getProductList",
  async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/phones");
      //console.log("response", response);

      return response.data;
    } catch (error) {
      console.log("error from redux");
      return [];
    }
  }
);
export const filtros = createAsyncThunk(
  "product/filtros",
  async (search, dispatch) => {
    try {

const response = await axios.get("http://localhost:3001/phones"); 

console.log('respiestaApi'+ response)
const filteredResponse = response.data.filter((product) => {
if (product.name.toString().toLowerCase().includes(search.toLowerCase()) ||
product.brand.toString().toLowerCase().includes(search.toLowerCase()) 

)
return product;
})

return filteredResponse

    } catch (error) {
      console.log(error.message);
      return [];
    }
  }
);