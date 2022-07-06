import { Link } from 'react-router-dom';

import { Characters, CharactersFavorite } from '@Types/character-type';
import { HeartOff } from 'assets/Icons/Heart/HeartOff';
import { HeartOn } from 'assets/Icons/Heart/HeartOn';
import { useCharacters } from 'context/character';
import { validateIsMyFavorite } from 'utils/validateIsMyFavorite';

import { Container, ImageCard, WrapperNameAndFavorite } from './styles';

type CardProps = {
  character: Characters | CharactersFavorite;
  handleFavoriteHero: (character: CharactersFavorite) => void;
};

export default function Card({ character, handleFavoriteHero }: CardProps) {
  const { myFavorites } = useCharacters();

  const isMyFavorite = validateIsMyFavorite(myFavorites, character);

  return (
    <Container>
      <Link to={`/hero/${character.id}`}>
        <ImageCard url={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
      </Link>
      <WrapperNameAndFavorite onClick={() => handleFavoriteHero(character)}>
        <span>{character.name}</span>
        {isMyFavorite?.id === character.id ? <HeartOn /> : <HeartOff />}
      </WrapperNameAndFavorite>
    </Container>
  );
}
