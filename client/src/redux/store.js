import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";
import productByIdReducer from "./Slices/ProductById.slice";

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        productById: productByIdReducer,

    },
    
})

export default store;