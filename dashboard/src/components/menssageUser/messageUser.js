import React from 'react';
import * as C from './styles';

export const MenssageUser = ({ title, data }) => {
  return (
    <C.Container>
      <C.IconMenssage />
      <C.Area>
        <C.Titlemenssage>{title}</C.Titlemenssage>
        <C.DataMessage>{data}</C.DataMessage>
      </C.Area>
    </C.Container>
  );
};
