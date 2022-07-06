import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Characters } from '@Types/character-type';
import { HeroComics } from '@Types/comics-type';
import Header from 'components/Header';
import InputSearch from 'components/InputSearch';
import Loading from 'components/Loading';
import { getHeroDetail, HeroDetailParams } from 'services/getHeroDetail';
import { getHeroDetailComics } from 'services/getHeroDetailComics';

import HeroDescription from './HeroDescription';
import HeroImage from './HeroImage';
import LatestReleases from './LatestReleases';
import { Container, WraperHeader, WrapperSectionAndIMG, IMGContainer } from './styles';

export default function CharactersDetail() {
  const [heroData, setHeroData] = useState<Characters>({} as Characters);
  const [heroDataComics, setHeroDataComics] = useState<HeroComics[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { characterId } = useParams<HeroDetailParams>();

  const getData = async () => {
    setIsLoading(true);
    if (characterId) {
      const { data, success } = await getHeroDetail({ characterId });
      if (success) {
        setHeroData(data);
      }
    }

    setIsLoading(false);
  };

  const getDataHeroComics = async () => {
    setIsLoading(true);
    if (characterId) {
      const { data, success } = await getHeroDetailComics({ characterId });
      if (success) {
        console.log('DATA USEEEFFE', data);

        setHeroDataComics(data);
      }
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getData();
    getDataHeroComics();
  }, []);
  return (
    <Container>
      <WraperHeader>
        <Header isDetailHero />
        <InputSearch placeholder="Procure por heróis" onChange={(value) => console.log(value)} />
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
