import React from 'react';
import * as C from './styles';

export const Header = () => {
  return (
    <C.Container>
      <C.Logo>
        <C.IconPage />
      </C.Logo>
      <C.Header>
        <h3>Product</h3>
        <span>Product Registration/Change</span>
      </C.Header>
    </C.Container>
  );
};
