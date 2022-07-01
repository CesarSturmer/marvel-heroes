/* eslint-disable react/jsx-props-no-spreading */
import React, { InputHTMLAttributes } from 'react';

import { Search } from 'assets/Icons/Search';

import { Container, Input } from './styles';

type InputSearchProps = InputHTMLAttributes<HTMLInputElement>;

export default function InputSearch(props: InputSearchProps) {
  return (
    <Container>
      <Search />
      <Input {...props} />
    </Container>
  );
}
