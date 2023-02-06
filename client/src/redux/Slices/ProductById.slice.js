import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const  initialState = {
    product:[
        {
            model:'',
            brand: '',
            price: 0.00,
            image: '',
            launch:'',
            memory:{
                ram:[],
                intern:[]
            },
            color:[]
        }
    ],
    productStatus:''
}

export const STATUSES = Object.freeze({
    IDLE:'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

 const ProductByIdSlice= createSlice({
    name:'ProductById',
    initialState,
    reducers:{},
    // add cases from status query axios (getProductById)
    extraReducers:(builder)=>{
        builder
        .addCase(getProductById.pending,(state,action)=>{
            state.productStatus=STATUSES.LOADING;
        })
        .addCase(getProductById.fulfilled,(state,action)=>{
            state.productStatus=STATUSES.IDLE;
            state.product= action.payload;
        })
        .addCase(getProductById.rejected,(state,action)=>{
            state.productStatus=STATUSES.ERROR;
        })
    }
})

export default ProductByIdSlice.reducer;

export const getProductById=createAsyncThunk('product/getProductById',async (id)=>{
    const res = await axios.get('http://localhost:3001/phones/'+id);
    console.log('estoy llamando al api');
    return res.data[0];
});