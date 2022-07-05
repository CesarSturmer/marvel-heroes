import { createContext, Dispatch, SetStateAction, useContext } from 'react';

import { Characters, CharactersFavorite } from '@Types/character-type';
import { GetListCharactersParams } from 'services/listCharacters-type';

export type FiltersContext = {
  name: string | null;
  isViewFavorite: boolean;
};

export type CharactersContextType = {
  listCharacters: Characters[] | CharactersFavorite[];
  setListCharacter: Dispatch<SetStateAction<Characters[] | CharactersFavorite[]>>;
  filters: FiltersContext;
  setFilters: Dispatch<SetStateAction<FiltersContext>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  getData: (params: GetListCharactersParams) => void;
  myFavorites: CharactersFavorite[];
  setMyFavorites: (character: CharactersFavorite) => void;
};

export const CharactersContext = createContext({} as CharactersContextType);

export function useCharacters() {
  const context = useContext(CharactersContext);

  if (!context) {
    throw new Error('useCharacters error');
  }

  return context;
}
