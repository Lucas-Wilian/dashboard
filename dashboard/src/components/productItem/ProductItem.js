import React from 'react';
import * as C from './styles';

export const ProductItem = () => {
  return (
    <C.Container>
      <span>Name product</span>
      <span>value</span>
      <span>price</span>
      <span>active</span>
      <div>
        <C.IconEdit />
        <C.IconEye />
        <C.IconDelete />
      </div>
    </C.Container>
  );
};
