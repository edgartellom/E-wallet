import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsuarios = createAsyncThunk('usuarios/fetchUsuarios', async () => {
  const response = await axios.get('');
  return response.data;
});

const usuariosSlice = createSlice({
  name: 'usuarios',
  initialState: {
    usuarios: [],
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
      state.usuarios = action.payload;
    },
    [fetchUsuarios.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default usuariosSlice.reducer;
