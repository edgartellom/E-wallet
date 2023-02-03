import { configureStore } from "@reduxjs/toolkit";
import { titlePage } from "./slices";

export const store = configureStore({
    reducer: {
        title: titlePage.reducer,
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch