import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  counter: [],
  status: "idle",
  error: null,
  adder: 0,
  products: [
    {
      id: 1,
      title: "title1",
      description: "description1",
      completed: false,
    },
  ],
};

export const getTodos = createAsyncThunk("counter/getCounter", async () => {
  try {
    const response = await axios.get("/phones");
    console.log(response);
    console.log(response.data);

    return response.data;
    //return [...response.data]
  } catch (error) {
    return console.log("error from redux");
  }
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(state, action);
      state.adder++;
    },
    addition: (state, action) => {
      state.adder += action.payload;
    },
    addProduct: (state, action) => {
      console.log(state, action);
      state.products.push(action.payload);
    },

    deleteProduct: (state, action) => {
      const productFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        state.products.splice(state.indexOf(productFound), 1);
      }
    },
    updateProduct: (state, action) => {
      const { id, title, description } = action.payload;
      const foundProduct = state.find((p) => p.products.id === id);
      if (foundProduct) {
        foundProduct.title = title;
        foundProduct.description = description;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.status = "loading";
    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getTodos.fulfilled, (state, action) => {
      // Add user to the state array
      state.counter = action.payload;

      //state.counter.push(action.payload)
    });
  },
});

export default counterSlice.reducer;
export const { add, addition } = counterSlice.actions;
