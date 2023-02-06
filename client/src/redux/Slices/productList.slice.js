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
