import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
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
  },
  extraReducers: (builder) => {
    builder.addCase(getSearchProducts.pending, (state) => {
      state.status = STATUSES.LOADING;
    });

    builder.addCase(getSearchProducts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.status = STATUSES.IDLE;
    });

    builder.addCase(getSearchProducts.rejected, (state, action) => {
      state.list = [];
      state.status = STATUSES.ERROR;
    });
  },
});


export default SearchProductsSlice.reducer;

export const getSearchProducts = createAsyncThunk(
  "product/getSearchProducts",
  async (search, dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/phones");
      console.log("response", response);
      const filteredResponse = response.data.filter((product) => {
        return product.brand.toLowerCase().includes(search.toLowerCase()) || product.name.toLowerCase().includes(search.toLowerCase());
      });
      return filteredResponse;
    } catch (error) {
      console.log({ error: error.message });
      return [];
    }
  }
);