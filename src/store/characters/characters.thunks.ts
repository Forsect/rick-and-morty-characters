import { createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "./queries/characters.api";

export const getCharacters = createAsyncThunk(`characters/getCharacters`, async (page: number) =>
  API.getCharacters(page)
);
