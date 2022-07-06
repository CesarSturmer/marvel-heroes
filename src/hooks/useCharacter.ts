import { useEffect, useState } from 'react';

import { Characters, CharactersFavorite } from '@Types/character-type';
import { FiltersContext } from 'context/CharacterContext';
import { getListCharacters } from 'services/getListCharacters';
import { GetCharactersResponse, GetListCharactersParams } from 'services/listCharacters-type';

export function useCharacter() {
  const [filters, setFilters] = useState<FiltersContext>({
    isViewFavorite: false,
    name: null,
    offset: 0
  } as FiltersContext);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [listCharacters, setListCharacter] = useState<Characters[] | CharactersFavorite[]>(
    [] as Characters[]
  );

  const [responseData, setResponseData] = useState<GetCharactersResponse>(
    {} as GetCharactersResponse
  );

  const getData = async (params: GetListCharactersParams) => {
    setIsLoading(true);
    const { data, success } = await getListCharacters({
      nameStartsWith: params.nameStartsWith,
      orderBy: params.orderBy,
      offset: params.offset
    });

    if (success) {
      setFilters((prevState) => ({ ...prevState, isViewFavorite: false }));
      setListCharacter(data.data.results);
      setResponseData(data);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const controller = new AbortController();
    getData({ nameStartsWith: filters.name, orderBy: filters.orderBy });
    return () => controller.abort();
  }, []);

  return {
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
  };
}
