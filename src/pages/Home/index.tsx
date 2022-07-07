import { useContext, useEffect } from 'react';

import Filters from 'components/Filters';
import Header from 'components/Header';
import InputSearch from 'components/InputSearch';
import Pagination from 'components/Pagination';
import { CharactersContext } from 'context/CharacterContext';
import { useDebounce } from 'hooks/useDebounce';

import ListCharacters from './ListCharacters.ts';
import { Container, SubTitle, Title, ContainerFilters } from './styles';

export default function Home() {
  const {
    listCharacters,
    filters,
    setFilters,
    getData,
    responseData,
    currentPage,
    setCurrentPage,
    myFavorites
  } = useContext(CharactersContext);

  function onChangePage(page: number) {
    if (page === currentPage) return;

    const valuePage = page * 20 - 20;

    if (page > currentPage) {
      setFilters((prevState) => ({ ...prevState, offset: prevState.offset + valuePage }));
      getData({ nameStartsWith: filters.name, offset: valuePage, orderBy: filters.orderBy });
    }

    if (page < currentPage) {
      setFilters((prevState) => ({ ...prevState, offset: prevState.offset - valuePage }));
      getData({ nameStartsWith: filters.name, offset: valuePage, orderBy: filters.orderBy });
    }
  }

  async function handleGetData(value: string) {
    getData({ nameStartsWith: value, offset: 0 });
  }

  const debounceSearch = useDebounce(handleGetData, 400);

  return (
    <Container>
      <Header isDetailHero={false} />
      <Title>{`explore o universo`.toUpperCase()}</Title>
      <SubTitle>
        Mergulhe no domínio deslumbrante de todos os personages clássicos que você ama - aqueles que
        você descobrirá em breve
      </SubTitle>

      <InputSearch
        placeholder="Procure por heróis"
        onChange={(value) => {
          setFilters({
            ...filters,
            name: value.target.value,
            isViewFavorite: !filters.isViewFavorite
          });
          setCurrentPage(1);
          debounceSearch(value.target.value);
        }}
      />

      <ContainerFilters>
        <span>Encontrado {responseData.data?.count} heróis</span>
        <Filters />
      </ContainerFilters>
      <ListCharacters listCharacters={filters.isViewFavorite ? myFavorites : listCharacters} />

      {!filters.isViewFavorite && (
        <Pagination
          currentPage={currentPage}
          totalCount={responseData.data?.total}
          pageSize={20}
          onPageChange={(page) => {
            setCurrentPage(page);
            onChangePage(page);
          }}
        />
      )}
    </Container>
  );
}
