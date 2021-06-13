import * as Types from "./characters.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCharacters, getCharacterDetails } from "./characters.thunks";

const initialState: Types.InitialState = {
  characters: [],
  pagesAmount: 0,
  currentPage: 1,
  searchCharacterName: "",
  characterDetails: [],
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSearchCharacterName: (state, action: PayloadAction<string>) => {
      state.searchCharacterName = action.payload;
    },
  },
  extraReducers: {
    [getCharacters.fulfilled.type]: (state, action: PayloadAction<Types.CharactersResult>) => {
      state.pagesAmount = action.payload.characters.info.pages;
      state.characters = action.payload.characters.results;
    },
    [getCharacters.rejected.type]: (state, _) => {
      state.characters = [];
      state.pagesAmount = 1;
      state.currentPage = 1;
    },
    [getCharacterDetails.fulfilled.type]: (state, action: PayloadAction<Types.CharacterDetailsResult>) => {
      if (state.characterDetails.find((x) => x.id === action.payload.character.id)) {
        state.characterDetails = state.characterDetails.map((x) =>
          x.id === action.payload.character.id ? action.payload.character : x
        );
      } else {
        state.characterDetails = [...state.characterDetails, action.payload.character];
      }
    },
  },
});
