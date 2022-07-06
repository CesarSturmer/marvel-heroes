import { useContext } from 'react';

import { HeartOff } from 'assets/Icons/Heart/HeartOff';
import { HeartOn } from 'assets/Icons/Heart/HeartOn';
import { HeroeIcon } from 'assets/Icons/HeroeIcon';
import { ToggleSwitch } from 'components/ToggleSwitch';
import { CharactersContext } from 'context/CharacterContext';

import { Container, ContainerSwitch, WrapperSpanAndSVG } from './styles';

export default function Filters() {
  const { setIsLoading, filters, setFilters } = useContext(CharactersContext);

  const handleViewFavoriteHeroes = () => {
    setIsLoading(true);
    setFilters((prevState) => ({
      ...prevState,
      isViewFavorite: !filters.isViewFavorite
    }));

    setIsLoading(false);
  };

  return (
    <Container>
      <ContainerSwitch>
        <WrapperSpanAndSVG>
          <HeroeIcon />
          <span>Ordernar por nome - A/Z</span>
        </WrapperSpanAndSVG>
        <ToggleSwitch />

        <WrapperSpanAndSVG aplyCursorPointer onClick={() => handleViewFavoriteHeroes()}>
          {filters.isViewFavorite ? <HeartOn /> : <HeartOff />}
          <span>Somente Favoritos</span>
        </WrapperSpanAndSVG>
      </ContainerSwitch>
    </Container>
  );
}
