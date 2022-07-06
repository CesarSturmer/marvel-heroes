import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from 'assets/Logo';
import { LogoDetail } from 'assets/LogoDetail';

import { Container } from './styles';

type HeaderProps = {
  isDetailHero: boolean;
};
export default function Header({ isDetailHero }: HeaderProps) {
  return (
    <Link to="/">
      <Container>{isDetailHero ? <LogoDetail /> : <Logo />}</Container>
    </Link>
  );
}
