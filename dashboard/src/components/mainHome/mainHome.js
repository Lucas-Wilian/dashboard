import React from 'react';
import * as C from './styles';

export const MainHome = () => {
  return (
    <C.Container>
      <C.Area>
        <C.TitleSection>
          <span>Detail</span>
        </C.TitleSection>
        <C.Header>
          <C.ProductInfo>
            <C.IconProduct />
            <h3>Products</h3>
            <span>99+</span>
          </C.ProductInfo>

          <C.ProductInfo>
            <C.IconUsers />
            <h3>Users</h3>
            <span>99+</span>
          </C.ProductInfo>

          <C.ProductInfo>
            <C.IconSale />
            <h3>Sales</h3>
            <span>99+</span>
          </C.ProductInfo>

          <C.ProductInfo>
            <h3>Title</h3>
            <span>99+</span>
          </C.ProductInfo>
        </C.Header>
        <C.User></C.User>
        <C.TitleSection>
          <span>Recent Products</span>
        </C.TitleSection>
        <section>
          <span>Name Product</span>
          <span>Data Update</span>
          <span>Value Price</span>
          <span>Status</span>
        </section>
        <C.MainProduct>
          <ul>
            <li>
              <span>Name Product</span>
              <span>00/00/0000</span>
              <span>R$ 0.00</span>
              <span>active</span>
            </li>

            <li>
              <span>Name Product</span>
              <span>00/00/0000</span>
              <span>R$ 0.00</span>
              <span>active</span>
            </li>

            <li>
              <span>Name Product</span>
              <span>00/00/0000</span>
              <span>R$ 0.00</span>
              <span>active</span>
            </li>

            <li>
              <span>Name Product</span>
              <span>00/00/0000</span>
              <span>R$ 0.00</span>
              <span className='desactive'>desactive</span>
            </li>

            <li>
              <span>Name Product</span>
              <span>00/00/0000</span>
              <span>R$ 0.00</span>
              <span>active</span>
            </li>

            <li>
              <span>Name Product</span>
              <span>00/00/0000</span>
              <span>R$ 0.00</span>
              <span>active</span>
            </li>

            <li>
              <span>Name Product</span>
              <span>00/00/0000</span>
              <span>R$ 0.00</span>
              <span>active</span>
            </li>

            <li>
              <span>Name Product</span>
              <span>00/00/0000</span>
              <span>R$ 0.00</span>
              <span className='desactive'>desactive</span>
            </li>

            <li>
              <span>Name Product</span>
              <span>00/00/0000</span>
              <span>R$ 0.00</span>
              <span>active</span>
            </li>

            <li>
              <span>Name Product</span>
              <span>00/00/0000</span>
              <span>R$ 0.00</span>
              <span>active</span>
            </li>

            <li>
              <span>Name Product</span>
              <span>00/00/0000</span>
              <span>R$ 0.00</span>
              <span>active</span>
            </li>

            <li>
              <span>Name Product</span>
              <span>00/00/0000</span>
              <span>R$ 0.00</span>
              <span className='desactive'>desactive</span>
            </li>
          </ul>
        </C.MainProduct>
      </C.Area>
    </C.Container>
  );
};
