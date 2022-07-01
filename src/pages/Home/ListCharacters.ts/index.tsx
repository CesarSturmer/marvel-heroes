import { useEffect } from 'react';

import { Characters } from '@Types/character-type';
import Card from 'components/Card';
import Loading from 'components/Loading';
import { useCharacters } from 'context/character';

import { Container } from './styles';

type ListCharactersProps = {
  listCharacters: Characters[];
};

export default function ListCharacters({ listCharacters }: ListCharactersProps) {
  const { isLoading, getData, filters } = useCharacters();

  useEffect(() => {
    getData({ nameStartsWith: filters.name });
  }, []);
  return (
    <Container>
      {!isLoading &&
        listCharacters.map((character: Characters) => (
          <Card key={character.id} character={character} />
        ))}
      {isLoading && <Loading />}
    </Container>
  );
}
