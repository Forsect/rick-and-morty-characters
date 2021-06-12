import { Character, CharacterDetails } from "shared/types";

export interface CharactersResult {
  characters: {
    info: {
      count: number;
      pages: number;
    };
    results: Character[];
  };
}

export interface CharacterDetailsResult {
  character: CharacterDetails;
}

export interface InitialState {
  characters: Character[];
  characterDetails: CharacterDetails[];
  pagesAmount: number;
  currentPage: number;
  searchCharacterName: string;
}

export interface GetCharactersRequest {
  page: number;
  name: string;
}
