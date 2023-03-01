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
  },
  reducers: {},
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

export default userByIdSlice.reducer;
