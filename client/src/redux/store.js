import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";
import productByIdReducer from "./slices/productByIdSlice";
import productListReducer from "./slices/productListSlice";
import paginationReducer from "./slices/paginationSlice";
//import searchProductsReducer from "./slices/searchProductsSlice"
import cartSlice from "./slices/cartSlice";
import categoryListSlice from "./slices/categoryListSlice";
import userReducer from "./slices/userSlice";
//import searchProductsReducer from "./slices/searchProductsSlice"


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    productById: productByIdReducer,
    product: productListReducer,
    categories: categoryListSlice,
    paginated: paginationReducer,
    cart: cartSlice,
    user: userReducer,
  },
});

export default store;
