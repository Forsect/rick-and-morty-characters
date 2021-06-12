import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetCharactersRequest } from "./characters.types";
import * as API from "./queries/characters.api";

export const getCharacters = createAsyncThunk(
  `characters/getCharacters`,
  async ({ page, name }: GetCharactersRequest) => API.getCharacters(page, name)
);
