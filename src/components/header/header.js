import React from 'react';
import * as C from './styles';

export const Header = () => {
  return (
    <C.Container>
      <C.Logo>
        <C.IconPage />
      </C.Logo>
      <C.Header>
        <h3>Produto</h3>
        <span>Cadastro/Alteração de produto</span>
      </C.Header>
    </C.Container>
  );
};
