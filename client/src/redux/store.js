import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";
import productByIdReducer from "./slices/productByIdSlice";
import productListReducer from "./slices/productListSlice";
import paginationReducer from "./slices/paginationSlice";
//import searchProductsReducer from "./slices/searchProductsSlice"
import cartSlice from "./slices/cartSlice";
import categoryListSlice from "./slices/categoryListSlice";
import userByIdSlice from "./slices/userByIdSlice";
//import searchProductsReducer from "./slices/searchProductsSlice"


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    productById: productByIdReducer,
    product: productListReducer,
    categories: categoryListSlice,
    paginated: paginationReducer,
    cart: cartSlice,
    users: userByIdSlice,
  },
});

export default store;
