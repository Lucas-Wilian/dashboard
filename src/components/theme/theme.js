import * as C from './styles';

import React from 'react';
import { SideBar } from '../sidebar/sideBar';
import { Header } from '../header/header';

export const Theme = ({ children }) => {
  return (
    <C.Container>
      <SideBar />
      <C.Area>
        <Header />
        {children}
      </C.Area>
    </C.Container>
  );
};
