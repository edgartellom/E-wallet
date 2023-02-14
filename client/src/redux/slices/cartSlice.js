import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    cartItem: []
}

const getItemIndex =(state, idToFind)=>{
    const ids=state.cartItem.map(i=>i.id)
    return ids.indexOf(idToFind);
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        
    }
})
