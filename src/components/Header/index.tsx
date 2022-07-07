import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Logo } from 'assets/Logo';
import { LogoDetail } from 'assets/LogoDetail';
import { CharactersContext } from 'context/CharacterContext';

import { Container } from './styles';

type HeaderProps = {
  isDetailHero: boolean;
};
export default function Header({ isDetailHero }: HeaderProps) {
  const { getData } = useContext(CharactersContext);

  return (
    <Link to="/">
      <Container onClick={() => getData({ orderBy: 'name', offset: 0, limit: '20' })}>
        {isDetailHero ? <LogoDetail /> : <Logo />}
      </Container>
    </Link>
  );
}
