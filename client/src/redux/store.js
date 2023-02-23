import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";
import productByIdReducer from "./slices/productByIdSlice";
import productListReducer from "./slices/productListSlice";
import paginationReducer from "./slices/paginationSlice";
import searchProductsReducer from "./slices/searchProductsSlice"
import cartSlice from "./slices/cartSlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    productById: productByIdReducer,
    product: productListReducer,
    searchProducts: searchProductsReducer,
    paginated: paginationReducer,
    cart: cartSlice
  },
});

export default store;
