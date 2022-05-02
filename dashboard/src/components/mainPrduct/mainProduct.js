import React, { useState } from 'react';
import * as C from './styles';
import { ButtonStyle } from './../buttonStyle/buttonStyle';
import { ProductItem } from '../productItem/ProductItem';
import { FormResgister } from '../formRegister/formRegister';

import Modal from 'react-modal';

export const MainProduct = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleClosemodal() {
    setIsOpen(false);
  }

  const customStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50% )',
      padding: '0',
    },
  };

  return (
    <C.Container>
      <>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleClosemodal}
          style={customStyle}
        >
          <FormResgister />
        </Modal>
      </>
      <C.Header>
        <C.Search>
          <C.IconSearch />
          <input type='text' placeholder='Search Product' />
        </C.Search>

        <C.Add>
          <ButtonStyle
            title={'ADD +'}
            style
            onClick={() => handleOpenModal()}
          />
        </C.Add>
      </C.Header>

      <C.TitleProduct>
        <span>Product</span>
        <span>Value</span>
        <span>Price</span>
        <span>Status</span>
        <span>Actions</span>
      </C.TitleProduct>
      <C.Products>
        <ul>
          <ProductItem />
        </ul>
      </C.Products>
    </C.Container>
  );
};
