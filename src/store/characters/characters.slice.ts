import * as Types from "./characters.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCharacters } from "./characters.thunks";

const initialState: Types.InitialState = { characters: [], pagesAmount: 0, currentPage: 1 };

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [getCharacters.fulfilled.type]: (state, action: PayloadAction<Types.CharactersResult>) => {
      console.log(action);
      state.pagesAmount = action.payload.characters.info.pages;
      state.characters = action.payload.characters.results;
    },
  },
});
