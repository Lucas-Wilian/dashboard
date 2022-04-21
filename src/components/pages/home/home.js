import React from 'react';
import { Header } from '../../header/header';
import { Theme } from '../../theme/theme';
import { AiFillHome } from '../../styles/icons';
import { MainHome } from '../../mainHome/mainHome';

export const Home = () => {
  return (
    <Theme>
      <Header iconPage={<AiFillHome />} title={'Home'} subTitle={'Home page'} />
      <MainHome />
    </Theme>
  );
};
