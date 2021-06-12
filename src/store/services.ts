import * as CharactersThunks from "./characters/characters.thunks";
import * as CharactersSelectors from "./characters/characters.selectors";
import { charactersSlice } from "./characters/characters.slice";

const actions = { characters: { ...CharactersThunks, ...charactersSlice.actions } };

const selectors = { characters: { ...CharactersSelectors } };

const services = { actions, selectors };

export default services;
