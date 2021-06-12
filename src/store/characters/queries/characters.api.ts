import request from "graphql-request";
import { API_URL } from "shared/constants";
import { CharactersResult } from "../characters.types";
import { charactersQuery, charactersVariables } from "./charactersQuery";

export const getCharacters = (page: number, name: string) =>
  request<CharactersResult>(API_URL, charactersQuery, charactersVariables(page, name));
