import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState = {
  //cartItems: [],
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  userCart:[]
};



const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
          itemPrice : state.cartItems[existingIndex].itemPrice
        };
        
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1, itemPrice: state.cartItems.price };
        state.cartItems.push(tempProductItem);
        
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // pushToCart(state, action){
    //   state.cartItems.push(action.payload)
    // },
    concatArrays: (state, action) => {
      state.cartItems = state.cartItems.concat(state.userCart);
      //state.userCart = action.payload;
    },

    addToUserCart(state, action){
      const existingIndex = state.cartItems.findIndex(
          (item) => item.id === action.payload.id
        );
  
        if (existingIndex >= 0) {
          state.cartItemsUser[existingIndex] = {
            ...state.cartItemsUser[existingIndex],
            cartQuantity: state.cartItemsUser[existingIndex].cartQuantity + 1,
            itemPrice : state.cartItemsUser[existingIndex].itemPrice
          };
          
        } else {
          let tempProductItem = { ...action.payload, cartQuantity: 1, itemPrice: state.cartItemsUser.price };
          state.cartItemsUser.push(tempProductItem);
          
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItemsUser));
  },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;

        
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;

          
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    }, 
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    cartLogIn(state, action){
      if(state.userCart.lenght >0){
        if(state.cartItems.length >0){
          state.userCart.push(state.cartItems)
          console.log(state.userCart)
        }
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createItemCart.fulfilled, (state,action) => {
      state.userCart = action.payload
      //  state.userCart.push(action.payload)
    })

    builder.addCase(getItemCart.fulfilled, (state, action) => {
      state.userCart = action.payload
    })
  }
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart, addToUserCart, cartLogIn, concatArrays } =
  cartSlice.actions;

export default cartSlice.reducer;

/////////////////////////Shopping Cart when user is logged in////////

export const createItemCart = createAsyncThunk(
  "userCart/postUserCart",
  async(payload) => {
    try{
      const response = await axios.post('/cartDetails', payload)
      return response.data
    }catch(error){
      console.log("line 114", error)
      return []
    }
  }
)

export const getItemCart = createAsyncThunk(
  'userCart/getUserCartById',
  async(payload) => {
    try{
      const res = await axios.get(`/cartDetails/${payload}`)
      return res.data
    }catch(err){
      console.log(err)
      return []
    }
  }
)

export const createCartId = createAsyncThunk(
  'type/postData',
  async(payload) => {
    try{
      const res = await axios.post('/cart', payload)
      return res.data
    }catch(e){
      console.log(e)
      return []
    }
  }
)

export const getCartId = createAsyncThunk(
  'cart/getCart',
  async(id) => {
    try{
      const res = await axios.get(`/cart:${id}`)
      return res.data
    }catch(e){
      console.log(e)
      return []
    }
  }
)
