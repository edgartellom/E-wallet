import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";
import productByIdReducer from "./Slices/ProductById.slice";
import productListReducer from "./slices/productList.slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    productById: productByIdReducer,
    product: productListReducer,
  },
});

export default store;
