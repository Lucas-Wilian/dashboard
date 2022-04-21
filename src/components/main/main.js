import React from 'react';
import * as C from './styles';

export const Main = () => {
  return (
    <C.Container>
      <C.Header>
        <C.Search>
          <C.IconSearch />
          <input type='text' placeholder='Search Product' />
        </C.Search>
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
          <li>
            <span>Name product</span>
            <span>value</span>
            <span>price</span>
            <span>active</span>
            <div>
              <C.IconEdit />
              <C.IconEye />
              <C.IconDelete />
            </div>
          </li>

          <li>
            <span>Name product</span>
            <span>value</span>
            <span>price</span>
            <span>active</span>
            <div>
              <C.IconEdit />
              <C.IconEye />
              <C.IconDelete />
            </div>
          </li>

          <li>
            <span>Name product</span>
            <span>value</span>
            <span>price</span>
            <span>active</span>
            <div>
              <C.IconEdit />
              <C.IconEye />
              <C.IconDelete />
            </div>
          </li>

          <li>
            <span>Name product</span>
            <span>value</span>
            <span>price</span>
            <span>active</span>
            <div>
              <C.IconEdit />
              <C.IconEye />
              <C.IconDelete />
            </div>
          </li>

          <li>
            <span>Name product</span>
            <span>value</span>
            <span>price</span>
            <span>active</span>
            <div>
              <C.IconEdit />
              <C.IconEye />
              <C.IconDelete />
            </div>
          </li>
        </ul>
      </C.Products>
    </C.Container>
  );
};
