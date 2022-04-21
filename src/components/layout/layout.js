import React from 'react';

import * as C from './styles';

import { Theme } from '../theme/theme';
import { Main } from '../main/main';

export const Layout = () => {
  return (
    <Theme>
      <C.Container>
        <Main />
      </C.Container>
    </Theme>
  );
};
