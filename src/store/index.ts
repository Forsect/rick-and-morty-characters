import { configureStore } from "@reduxjs/toolkit";
import { charactersReducer } from "./characters";

const store = configureStore({ reducer: { characters: charactersReducer } });

export type Dispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
