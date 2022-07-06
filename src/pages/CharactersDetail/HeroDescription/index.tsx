import { useContext } from 'react';

import { Characters } from '@Types/character-type';
import { Comic } from 'assets/Icons/Comic';
import { HeartOff } from 'assets/Icons/Heart/HeartOff';
import { HeartOn } from 'assets/Icons/Heart/HeartOn';
import { Movies } from 'assets/Icons/Movies';
import Rating from 'components/Rating';
import { CharactersContext } from 'context/CharacterContext';
import { validateIsMyFavorite } from 'utils/validateIsMyFavorite';

import {
  DescriptionContainer,
  DescriptionContent,
  HeroInfo,
  HeroInfoComics,
  HeroInfoMovies,
  HeroLastComic,
  HeroRating,
  HeroTitle,
  WrapperDescription,
  HeroDescriptionCard
} from './styles';

type HeroDescriptionProps = {
  heroData: Characters;
};

export default function HeroDescription({ heroData }: HeroDescriptionProps) {
  const { myFavorites, setMyFavorites } = useContext(CharactersContext);

  const isMyFavorite = validateIsMyFavorite(myFavorites, heroData);

  return (
    <DescriptionContainer>
      <DescriptionContent>
        <WrapperDescription>
          <div>
            <HeroTitle>{heroData.name}</HeroTitle>
          </div>

          <div>
            <button onClick={() => setMyFavorites(heroData)} type="button">
              {isMyFavorite?.id === heroData.id ? <HeartOn /> : <HeartOff />}
            </button>
          </div>
        </WrapperDescription>

        <HeroDescriptionCard>
          <span>{heroData.description || 'Descrição não encontrado nas galáxias.'}</span>
        </HeroDescriptionCard>

        <HeroInfo>
          <HeroInfoComics>
            <span>Quadrinhos</span>
            <br />
            <Comic />
            <span>{heroData.comics?.available}</span>
          </HeroInfoComics>

          <HeroInfoMovies>
            <span>Filmes</span>
            <br />
            <Movies />
            <span>{heroData.series?.available}</span>
          </HeroInfoMovies>
        </HeroInfo>

        <HeroRating>
          <span>Rating: </span>
          <span>{Rating(heroData.comics?.available)}</span>
        </HeroRating>
        <HeroLastComic>
          <span>Último quadrinho: </span>
          <span>13 fev. 2020</span>
        </HeroLastComic>
      </DescriptionContent>
    </DescriptionContainer>
  );
}
