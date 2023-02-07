import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUSES } from "./ProductById.slice";

let initialState = {
  list: [],
  status: "",
  error: null,
  allProducts: [],
};

export const ProductListSlice = createSlice({
  name: "ProductList",
  initialState,
  reducers: {
    searchList:(state, action)=>{
      let words=action.payload;
      state.list=state.allProducts.filter((i) => {
        return i.brand.toLowerCase().includes(words.toLowerCase()) || i.name.toLowerCase().includes(words.toLowerCase());
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductList.pending, (state) => {
      state.status = STATUSES.LOADING;
    });

    builder.addCase(getProductList.fulfilled, (state, action) => {
      
      state.status = STATUSES.IDLE;
      state.allProducts=action.payload;
      state.list = state.allProducts;
    });

    builder.addCase(getProductList.rejected, (state, action) => {
      state.list = [];
      state.status = STATUSES.ERROR;
    });
  },
});

export default ProductListSlice.reducer;
export const { searchList} = ProductListSlice.actions;

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
