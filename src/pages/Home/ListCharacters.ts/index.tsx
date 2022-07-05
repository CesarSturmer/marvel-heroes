import { Characters, CharactersFavorite } from '@Types/character-type';
import Card from 'components/Card';
import Loading from 'components/Loading';
import { useCharacters } from 'context/character';

import { Container } from './styles';

type ListCharactersProps = {
  listCharacters: Characters[] | CharactersFavorite[];
};

export default function ListCharacters({ listCharacters }: ListCharactersProps) {
  const { isLoading, setMyFavorites } = useCharacters();

  return (
    <Container>
      {!isLoading &&
        listCharacters.map((character: Characters | CharactersFavorite) => (
          <Card
            key={character.id}
            character={character}
            handleTeste={(idNumber) => setMyFavorites(idNumber)}
          />
        ))}
      {isLoading && <Loading />}
    </Container>
  );
}
