import React from 'react';
import { Header } from '../../header/header';
import { MainProduct } from '../../mainPrduct/mainProduct';
import { Theme } from '../../theme/theme';
import { FaShoppingCart } from '../../styles/icons';

export const Product = () => {
  return (
    <Theme>
      <Header
        iconPage={<FaShoppingCart />}
        title={'Product'}
        subTitle={'Product Registration/Change'}
      />
      <MainProduct />
    </Theme>
  );
};
