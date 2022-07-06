import { useContext } from 'react';

import { Characters, CharactersFavorite } from '@Types/character-type';
import Card from 'components/Card';
import Loading from 'components/Loading';
import { CharactersContext } from 'context/CharacterContext';

import { Container } from './styles';

type ListCharactersProps = {
  listCharacters: Characters[] | CharactersFavorite[];
};

export default function ListCharacters({ listCharacters }: ListCharactersProps) {
  const { isLoading, setMyFavorites } = useContext(CharactersContext);

  return (
    <Container>
      {!isLoading &&
        listCharacters.map((character: Characters | CharactersFavorite) => (
          <Card
            key={character.id}
            character={character}
            handleFavoriteHero={(character) => setMyFavorites(character)}
          />
        ))}
      {isLoading && <Loading />}
    </Container>
  );
}
