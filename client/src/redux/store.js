import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";
import productByIdReducer from "./Slices/ProductById.slice";
import productListReducer from "./slices/productList.slice";
import paginationReducer from "./Slices/paginationSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    productById: productByIdReducer,
    product: productListReducer,
    paginated: paginationReducer,
  },
});

export default store;
