import { useCallback, useEffect, useMemo, useState } from 'react';

import { Characters } from '@Types/character-type';
import Filters from 'components/Filters';
import Header from 'components/Header';
import InputSearch from 'components/InputSearch';
import { CharactersContext, FiltersContext } from 'context/character';
import { getListCharacters } from 'services/getListCharacters';
import { GetListCharactersParams } from 'services/listCharacters-type';

import ListCharacters from './ListCharacters.ts';
import { Container, SubTitle, Title, ContainerFilters } from './styles';

export default function Home() {
  const [listCharacters, setListCharacter] = useState<Characters[]>([] as Characters[]);
  const [filters, setFilters] = useState<FiltersContext>({
    isViewFavorite: false,
    orderByName: false,
    name: null
  } as FiltersContext);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (params: GetListCharactersParams) => {
    setIsLoading(true);
    const { data, success } = await getListCharacters({
      nameStartsWith: params.nameStartsWith
    });

    if (success) {
      setListCharacter(data);
    }

    setIsLoading(false);
  };

  const valueContext = useMemo(
    () => ({
      listCharacters,
      filters,
      isLoading,
      setListCharacter,
      setFilters,
      setIsLoading,
      getData
    }),
    [filters, isLoading, listCharacters]
  );

  return (
    <CharactersContext.Provider value={valueContext}>
      <Container>
        <Header />
        <Title>{`explore o universo`.toUpperCase()}</Title>
        <SubTitle>
          Mergulhe no domínio deslumbrante de todos os personages clássicos que você ama - aqueles
          que você descobrirá em breve
        </SubTitle>

        <InputSearch
          placeholder="Procure por heróis"
          onChange={(value) => {
            // setFilters({ ...filters, name: value.target.value });
            getData({ nameStartsWith: value.target.value });
          }}
        />

        <ContainerFilters>
          <span>Encontrado 20 heróis</span>
          <Filters />
        </ContainerFilters>
        <ListCharacters listCharacters={listCharacters} />
      </Container>
    </CharactersContext.Provider>
  );
}
