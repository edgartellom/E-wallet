import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUSES } from "./productByIdSlice";
import { sorts } from "../../tools";

let initialState = {
  list: [],
  status: "",
  error: null,
  allProducts: [],
  searchWords: "",
};

export const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    deleteProduct: (state, action) => {
      const productFound = state.list.find((p) => p.id === action.payload);
      if (productFound) {
        state.list.splice(state.list.indexOf(productFound), 1);
      }
    },
    searchList: (state, action) => {
      let words = action.payload.toLowerCase();
      state.list = state.allProducts.filter((i) => {
        let brand = i.brand.toLowerCase();
        let name = i.name.toLowerCase();

        return (
          brand.includes(words) ||
          name.includes(words) ||
          (brand + " " + name).includes(words)
        );
      });
    },
    sortList: (state, action) => {
      state.list = sorts(action.payload, state.list);
    },

    updateSearchWords: (state, action) => {
      state.searchWords = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductList.pending, (state) => {
      state.status = STATUSES.LOADING;
    });

    builder.addCase(getProductList.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.allProducts = action.payload;
      state.list = state.allProducts;
    });

    builder.addCase(getProductList.rejected, (state, action) => {
      state.list = [];
      state.status = STATUSES.ERROR;
    });

    builder.addCase(createProducts.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload) {
        state.list.push(action.payload);
      }

      // state.list = action.payload
    });
  },
});

export default productListSlice.reducer;
export const { searchList, updateSearchWords, sortList } =
  productListSlice.actions;

export const getProductList = createAsyncThunk(
  "product/getProductList",
  async (dispatch) => {
    try {
      const response = await axios.get("/phones");
      //console.log("response", response);

      return response.data;
    } catch (error) {
      console.log("error from redux");
      return [];
    }
  }
);

export const createProducts = createAsyncThunk(
  "products/createProducts",
  async (payload) => {
    console.log(payload);
    try {
      console.log(payload, "line60");
      let res = await axios.post("/phones", payload);
      // const myphone = {
      //   id:10,
      //   name:"samsungtest",
      //   brand:"galaxytest",
      //   price:10
      // }
      //console.log("res",res)
      return res.data;
    } catch (e) {
      console.log("error trying to create", e);
      return {};
    }
  }
);

export const { deleteProduct } = productListSlice.actions;
