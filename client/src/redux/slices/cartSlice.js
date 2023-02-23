import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

export const fetchUserCarts = createAsyncThunk(
  'carts/fetchUserCarts',
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`/api/carts?userId=${userId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


const initialState = {
  userCarts: [],
  status: 'idle',
  error: null,
};

export const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserCarts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserCarts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userCarts = action.payload;
      })
      .addCase(fetchUserCarts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default cartsSlice.reducer;
