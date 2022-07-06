import React, { createContext, Dispatch, SetStateAction, useContext, useMemo } from 'react';

import { Characters, CharactersFavorite } from '@Types/character-type';
import { useCharacter } from 'hooks/useCharacter';
import { useFavoriteHeroes } from 'hooks/useFavoriteHeroes';
import { GetCharactersResponse, GetListCharactersParams } from 'services/listCharacters-type';

export type FiltersContext = {
  name: string | null;
  isViewFavorite: boolean;
  offset: number;
  orderBy: string;
};

export type CharactersContextType = {
  listCharacters: Characters[] | CharactersFavorite[];
  setListCharacter: Dispatch<SetStateAction<Characters[] | CharactersFavorite[]>>;
  filters: FiltersContext;
  setFilters: Dispatch<SetStateAction<FiltersContext>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  getData: (params: GetListCharactersParams) => void;
  myFavorites: CharactersFavorite[] | Characters[];
  setMyFavorites: (character: CharactersFavorite | Characters) => void;
  responseData: GetCharactersResponse;
  setResponseData: Dispatch<React.SetStateAction<GetCharactersResponse>>;
  currentPage: number;
  setCurrentPage: Dispatch<React.SetStateAction<number>>;
};

type CharacterProvider = {
  children: React.ReactNode;
};
export const CharactersContext = createContext({} as CharactersContextType);

export function CharacterProvider({ children }: CharacterProvider) {
  const {
    filters,
    setFilters,
    isLoading,
    setIsLoading,
    listCharacters,
    setListCharacter,
    responseData,
    setResponseData,
    getData,
    currentPage,
    setCurrentPage
  } = useCharacter();

  const { myFavorites, handleSelectFavoriteHeroes } = useFavoriteHeroes();

  const valueContext = useMemo(
    () => ({
      listCharacters,
      filters,
      isLoading,
      setListCharacter,
      setFilters,
      setIsLoading,
      getData,
      myFavorites,
      setMyFavorites: handleSelectFavoriteHeroes,
      responseData,
      setResponseData,
      currentPage,
      setCurrentPage
    }),
    [filters, isLoading, listCharacters, myFavorites]
  );

  return <CharactersContext.Provider value={valueContext}>{children}</CharactersContext.Provider>;
}
