import * as C from './styles';

import React from 'react';
import { SideBar } from '../sidebar/sideBar';

export const Theme = ({ children }) => {
  return (
    <C.Container>
      <SideBar />
      <C.Area>{children}</C.Area>
    </C.Container>
  );
};
