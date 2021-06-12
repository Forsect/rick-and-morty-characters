import { RootState } from "store";

export const selectPagesAmount = (store: RootState) => {
  return store.characters.pagesAmount;
};

export const selectCurrentPage = (store: RootState) => {
  return store.characters.currentPage;
};

export const selectCharacters = (store: RootState) => {
  return store.characters.characters;
};

export const selectSearchCharacterName = (store: RootState) => {
  return store.characters.searchCharacterName;
};

export const selectCharacterDetailsById = (id: string) => (store: RootState) => {
  return store.characters.characterDetails.find((x) => x.id === id);
};
