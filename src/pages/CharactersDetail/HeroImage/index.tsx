/* eslint-disable react/jsx-no-useless-fragment */
import { ThumbNail } from '@Types/character-type';

import { Container } from '../styles';

type HeroImageProps = {
  thumbnail: ThumbNail;
};

export default function HeroImage({ thumbnail }: HeroImageProps) {
  if (!thumbnail) return <></>;

  return (
    <Container>
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="Imagem do herói" />
    </Container>
  );
}
