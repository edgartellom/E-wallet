import { createSlice } from '@reduxjs/toolkit';

const PaginationSlice = createSlice({
  name: 'paginated',
  initialState: {
    currentPage: 1,
  },
  reducers: {
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { changeCurrentPage } = paginationSlice.actions;
export default PaginationSlice.reducer;