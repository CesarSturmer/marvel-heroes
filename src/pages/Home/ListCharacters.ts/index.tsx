import React, { useEffect, useState } from 'react';

import { Characters } from '@Types/character-type';
import { getListCharacters } from 'services/getListCharacters';

import { Container } from './styles';

export default function ListCharacters() {
  const [data, setData] = useState<Characters[]>([]);
  async function getData() {
    const { data, success } = await getListCharacters({ name: 'SPIDER-MAN' });

    if (success) setData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      {' '}
      {data && (
        <ul>
          {data.map((item: Characters) => (
            <li>{item.name}</li>
          ))}
        </ul>
      )}
      {!data.length && <h1>CARREGANDO MANE</h1>}
    </Container>
  );
}
