import React from 'react';
import * as C from './styles';

export const ButtonStyle = ({ style, title, onClick }) => {
  return (
    <C.Container onClick={onClick} style={style}>
      {title}
    </C.Container>
  );
};
