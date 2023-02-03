import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toDo } from "./interfaceTodo";

interface todoState {
    todos: toDo[] | null;
     loading: boolean; 
    // singleGame: Game | null;
    // errors:any;
}

const initialState: todoState= {
    todos: [],
    // singleGame: null,
     loading: false,
    // errors: null
}

// actions are processes that get data from backend
export const getTodos = createAsyncThunk<toDo[]>(
    "todos/getTodos",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// reducers -> reduce to a specific state -> changes state
export const gameSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        setTodos: (state, action: PayloadAction<toDo[]>) => {
            state.todos = action.payload
        }
        // filterGame: (state, action) => {
        //     state.todos = state.todos?.filter(game => game._id != action.payload)!;
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(getTodos.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getTodos.fulfilled, (state, action) => {
            state.todos= action.payload;
            state.loading = false;
        });
        // builder.addCase(getGames.rejected, (state, action) => {
        //     state.loading = false;
        //     state.errors = action.payload;
        // });
        // builder.addCase(getGameById.pending, (state) => {
        //     state.loading = true;            
        // });
        // builder.addCase(getGameById.fulfilled, (state, action) => {
        //     state.singleGame = action.payload;
        //     state.loading = false;
        
        // builder.addCase(updateGame.fulfilled, (state, action) => { 
        //     state.singleGame = action.payload;
        // });
        // builder.addCase(deleteGame.fulfilled, (state, action) => {
        //     state.message
        // })
    }
})

export default gameSlice.reducer;
export const { setTodos} = gameSlice.actions;