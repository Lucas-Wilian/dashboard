import React from 'react';
import * as C from './styles';

export const Header = ({ iconPage, title, subTitle }) => {
  return (
    <C.Container>
      <C.Logo>{iconPage}</C.Logo>
      <C.Header>
        <h3>{title}</h3>
        <span>{subTitle}</span>
      </C.Header>
    </C.Container>
  );
};
