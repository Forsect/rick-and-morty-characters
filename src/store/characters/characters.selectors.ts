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
