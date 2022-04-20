import * as C from './styles';
import { SideBar } from '../sidebar/sideBar';

import React from 'react';

export const Theme = ({ children }) => {
  return (
    <C.Container>
      <SideBar />
      {children}
    </C.Container>
  );
};
