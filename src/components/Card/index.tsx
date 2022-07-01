import React, { useState } from 'react';

import { Characters } from '@Types/character-type';
import { HeartOff } from 'assets/Icons/Heart/HeartOff';
import { HeartOn } from 'assets/Icons/Heart/HeartOn';

import { Container, ImageCard, WrapperNameAndFavorite } from './styles';

const MY_FAVORE = [1011334, 1009144];

type CardProps = {
  character: Characters;
};

// quando receber eu preciso validar se ele já está na lista de favoritos [idfavoritos]

// ao clicar preciso pegar o id

type Favorites = {
  names: number[];
};
export default function Card({ character }: CardProps) {
  const [myFavorites, setMyFavorites] = useState<number[]>([]);

  console.log(myFavorites);

  return (
    <Container onClick={() => alert('character.id')}>
      <ImageCard url={character.thumbnail.path} />
      <WrapperNameAndFavorite>
        <span>{character.name}</span>

        {myFavorites.includes(character.id) ? <HeartOn /> : <HeartOff />}
      </WrapperNameAndFavorite>
    </Container>
  );
}
