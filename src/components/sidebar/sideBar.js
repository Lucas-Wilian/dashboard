import React from 'react';
import * as C from './styles';

export const SideBar = () => {
  return (
    <C.Container>
      <C.Header>
        <C.IconLogo />
        <h3>BLANK</h3>
      </C.Header>
      <C.Area>
        <C.Search>
          <C.IconSearch />
          <input placeholder='Search' />
        </C.Search>
        <C.Divise />
        <ul>
          <li>
            <C.IconHome />
            Home
          </li>
          <li className='active'>
            <C.IconProduct />
            Products<span>99+</span>
          </li>
          <li>
            <C.IconUser />
            Users<span>30</span>
          </li>
          <li>
            <C.IconNotification />
            Notifications<span>5</span>
          </li>
        </ul>
      </C.Area>
    </C.Container>
  );
};
