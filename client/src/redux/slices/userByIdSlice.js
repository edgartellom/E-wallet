import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsuarios = createAsyncThunk('user/fetchUsuarios', async () => {
  const response = await axios.get('/users/:id');
  return response.data;
});

const userByIdSlice = createSlice({
  name: 'user',
  initialState: {
    userId: [],
    status: 'idle',
    error: null,
    userLogin: {
      isLoggedIn: false,
      userInfo: null,
    },
  },
  reducers: {
    login: (state, action) => {
      state.userLogin.isLoggedIn = true;
      state.userLogin.userInfo = action.payload;
    },
    logout: (state) => {
      state.userLogin.isLoggedIn = false;
      state.userLogin.userInfo = null;
    },
  },
  extraReducers: {
    [fetchUsuarios.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchUsuarios.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.userId = action.payload;
    },
    [fetchUsuarios.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { login, logout } = userByIdSlice.actions;

export default userByIdSlice.reducer;