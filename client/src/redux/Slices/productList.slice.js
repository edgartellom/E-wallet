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
  reducers: {
    deleteProduct:(state,action) => {
      const productFound = state.list.find(p => p.id === action.payload)
      if(productFound){
         state.list.splice(state.list.indexOf(productFound), 1)
      }
   },
  },
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

    builder.addCase(createProducts.fulfilled, (state, action) => {
      console.log(action.payload)
      if(action.payload){
        state.list.push(action.payload)
      }
      
      // state.list = action.payload
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

export const createProducts = createAsyncThunk(
  'products/createProducts',
  async (payload) => {
    console.log(payload)
     try{
      console.log(payload, "line60")
        let res = await axios.post("http://localhost:3001/phones", payload)
        // const myphone = {
        //   id:10,
        //   name:"samsungtest",
        //   brand:"galaxytest",
        //   price:10
        // }
        //console.log("res",res)
        return res.data
     }catch(e){
      console.log("error trying to create", e)
        return {}
     }
  }
)

export const { deleteProduct } = ProductListSlice.actions 