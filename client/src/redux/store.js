import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";
import productByIdReducer from "./Slices/ProductByIdSlice";
import productListReducer from "./Slices/ProductListSlice";
import paginationReducer from "./Slices/PaginationSlice";
import searchProductsReducer from "./Slices/SearchProducts.slice"


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
