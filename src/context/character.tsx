import { createContext, Dispatch, SetStateAction, useContext } from 'react';

import { Characters } from '@Types/character-type';
import { GetListCharactersParams } from 'services/listCharacters-type';

export type FiltersContext = {
  name: string | null;
  orderByName: boolean;
  isViewFavorite: boolean;
};

export type CharactersContextType = {
  listCharacters: Characters[];
  setListCharacter: Dispatch<SetStateAction<Characters[]>>;
  filters: FiltersContext;
  setFilters: Dispatch<SetStateAction<FiltersContext>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  getData: (params: GetListCharactersParams) => void;
};

export const CharactersContext = createContext({} as CharactersContextType);

export function useCharacters() {
  const context = useContext(CharactersContext);

  if (!context) {
    throw new Error('useCharacters error');
  }

  return context;
}
