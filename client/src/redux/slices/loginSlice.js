import { createSlice } from "@reduxjs/toolkit";


const Login= createSlice(
    {
        name: 'login',
        initialState:{
            isLoggedIn: false,
            user: null,
            error: null,
            loading: false,
        },
        reducers: {
            loginRequest: (state) => {
              state.loading = true;
              state.error = null;
            },
            loginSuccess: (state, action) => {
              state.loading = false;
              state.isLoggedIn = true;
              state.user = action.payload;
            },
            loginFailure: (state, action) => {
              state.loading = false;
              state.isLoggedIn = false;
              state.user = null;
              state.error = action.payload;
            },
            logout: (state) => {
              state.isLoggedIn = false;
              state.user = null;
            },
    }
})
export const { loginRequest, loginSuccess, loginFailure, logout } = Login.actions;

export default Login.reducer;