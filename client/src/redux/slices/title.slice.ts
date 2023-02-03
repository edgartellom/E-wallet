import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface title{
    desc: string
}

const initialState: title = {desc: ''}

export const titlePage= createSlice({
    name: 'title-page',
    initialState,
    reducers:{
        updateTitle: (state, action: PayloadAction<string>)=>{
            state.desc=action.payload ;
        },
        removeTitle: (state, action:PayloadAction<string> )=>{
            state.desc='';
        }
    }
})