import { characterDetailsQuery, characterDetailsVariables } from "./characterDetailsQuery";
import request from "graphql-request";
import { API_URL } from "shared/constants";
import * as Types from "../characters.types";
import { charactersQuery, charactersVariables } from "./charactersQuery";

export const getCharacters = (page: number, name: string) =>
  request<Types.CharactersResult>(API_URL, charactersQuery, charactersVariables(page, name));

export const getCharacterDetails = (id: string) =>
  request<Types.CharacterDetailsResult>(API_URL, characterDetailsQuery, characterDetailsVariables(id));
