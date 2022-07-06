/* eslint-disable no-plusplus */
import React from 'react';

import filledStar from 'assets/avaliacao_off.svg';
import outlinedStar from 'assets/avaliacao_on.svg';

function Rating(stars: any) {
  const rating = [];
  for (let i = 0; i < stars && i <= 4; i++) {
    rating.push(<img key={i + 1} src={outlinedStar} alt="Ícone de estrela preenchido" />);
  }

  for (let i = 0; i < 5 - stars; i++) {
    rating.push(<img key={6 - i} src={filledStar} alt="Ícone de estrela não preenchido" />);
  }

  return <div>{rating.map((star: JSX.Element) => star)}</div>;
}

export default Rating;
