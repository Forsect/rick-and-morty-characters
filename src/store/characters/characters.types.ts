import { Character } from "shared/types";

export interface CharactersResult {
  characters: {
    info: {
      count: number;
      pages: number;
    };
    results: Character[];
  };
}

export interface InitialState {
  characters: Character[];
  pagesAmount: number;
  currentPage: number;
}
