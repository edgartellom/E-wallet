import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";
import productByIdReducer from "./Slices/productByIdSlice";
import productListReducer from "./Slices/productListSlice";
import paginationReducer from "./Slices/paginationSlice";
import searchProductsReducer from "./Slices/searchProductsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    productById: productByIdReducer,
    product: productListReducer,
    searchProducts: searchProductsReducer,
    paginated: paginationReducer,
  },
});

export default store;
