import React from 'react';
import * as C from './styles';

export const Main = () => {
  return (
    <C.Container>
      <C.Header>
        <C.Search>
          <C.SearchIcon />
          <input type='text' placeholder='Pesquisar produto' />
        </C.Search>

        {/* <Button /> */}
      </C.Header>

      <C.Products>
        <ul>
          <li>.....</li>
        </ul>
      </C.Products>
    </C.Container>
  );
};
