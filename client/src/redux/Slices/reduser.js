import { combineReducers } from 'redux';
import counterReducer from "./slice";
import productByIdReducer from "./Slices/ProductById.slice";
import productListReducer from "./slices/productList.slice";
import paginationReducer from "./Slices/paginationSlice";
import searchProductsReducer from "./Slices/SearchProducts.slice";

const rootReducer = combineReducers({
  counter: counterReducer,
  productById: productByIdReducer,
  product: productListReducer,
  paginated: paginationReducer,
  searchProducts: searchProductsReducer,
});

export default rootReducer;