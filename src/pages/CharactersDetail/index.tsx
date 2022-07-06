import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Characters } from '@Types/character-type';
import { HeroComics } from '@Types/comics-type';
import Header from 'components/Header';
import InputSearch from 'components/InputSearch';
import Loading from 'components/Loading';
import { CharactersContext } from 'context/CharacterContext';
import { useDebounce } from 'hooks/useDebounce';
import { getHeroDetail, HeroDetailParams } from 'services/getHeroDetail';
import { getHeroDetailComics } from 'services/getHeroDetailComics';
import { getListCharacters } from 'services/getListCharacters';
import { GetListCharactersParams } from 'services/listCharacters-type';

import HeroDescription from './HeroDescription';
import HeroImage from './HeroImage';
import LatestReleases from './LatestReleases';
import { Container, WraperHeader, WrapperSectionAndIMG, IMGContainer } from './styles';

export default function CharactersDetail() {
  const [heroData, setHeroData] = useState<Characters>({} as Characters);
  const [heroDataComics, setHeroDataComics] = useState<HeroComics[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { characterId } = useParams<HeroDetailParams>();

  const getDataHeroComics = async (id: number) => {
    setIsLoading(true);
    if (characterId) {
      const { data, success } = await getHeroDetailComics({ characterId: id });
      if (success) {
        setHeroDataComics(data);
      }
    }

    setIsLoading(false);
  };

  const getDataHero = async () => {
    setIsLoading(true);
    if (characterId) {
      const { data, success } = await getHeroDetail({ characterId });
      if (success) {
        setHeroData(data);
        getDataHeroComics(data.id);
      }
    }

    setIsLoading(false);
  };

  const getDataCharacterSearch = async (value: string) => {
    setIsLoading(true);
    const { data, success } = await getListCharacters({
      nameStartsWith: value,
      orderBy: 'name',
      offset: 0,
      limit: '1'
    });

    if (success) {
      const heroSearch = data?.data?.results[0];
      setHeroData(heroSearch);
      getDataHeroComics(heroSearch.id);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getDataHero();
  }, []);

  const debounceSearch = useDebounce(getDataCharacterSearch, 400);
  return (
    <Container>
      <WraperHeader>
        <Header isDetailHero />
        <InputSearch
          placeholder="Procure por heróis"
          onChange={(value) => debounceSearch(value.target.value)}
        />
      </WraperHeader>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <WrapperSectionAndIMG name={heroData.name}>
            <HeroDescription heroData={heroData} />

            <IMGContainer>
              <HeroImage thumbnail={heroData.thumbnail} />
            </IMGContainer>
          </WrapperSectionAndIMG>

          <LatestReleases character={heroDataComics} />
        </>
      )}
    </Container>
  );
}
