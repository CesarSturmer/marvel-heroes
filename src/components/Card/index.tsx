import { Characters, CharactersFavorite } from '@Types/character-type';
import { HeartOff } from 'assets/Icons/Heart/HeartOff';
import { HeartOn } from 'assets/Icons/Heart/HeartOn';
import { useCharacters } from 'context/character';

import { Container, ImageCard, WrapperNameAndFavorite } from './styles';

type CardProps = {
  character: Characters | CharactersFavorite;
  handleTeste: (character: CharactersFavorite) => void;
};

export default function Card({ character, handleTeste }: CardProps) {
  const { myFavorites } = useCharacters();

  const isMyFavorite = myFavorites.find((characterFilters) => {
    return character.id === characterFilters.id;
  });

  return (
    <Container onClick={() => handleTeste(character)}>
      <ImageCard url={character.thumbnail.path} />
      <WrapperNameAndFavorite>
        <span>{character.name}</span>
        {isMyFavorite?.id === character.id ? <HeartOn /> : <HeartOff />}
      </WrapperNameAndFavorite>
    </Container>
  );
}
