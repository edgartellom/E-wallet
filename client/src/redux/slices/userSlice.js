import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    username: null,
    email: null,
    admin: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.admin = action.payload.admin;
    },
    clearUser: (state) => {
      state.id = null;
      state.username = null;
      state.email = null;
      state.admin = null;
    },
    // postUser: async (state, action) => {
    //   const { id, username, email, admin } = action.payload;
    //   await axios.post("/users", { id, username, email, admin });
    // },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
