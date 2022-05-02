import React from 'react';
import * as C from './styles';

export const FormResgister = () => {
  return (
    <C.Container>
      <h2>Product Registration/Change</h2>
      <form>
        <C.Area>
          <C.AreaInput>
            <label>Title - Product</label>
            <input />
          </C.AreaInput>

          <C.GridInput>
            <C.AreaInput>
              <label>Price - Product</label>
              <input />
            </C.AreaInput>

            <C.AreaInput>
              <label>Promotion - Product</label>
              <input />
            </C.AreaInput>
          </C.GridInput>
          <C.GridInput>
            <C.AreaInput>
              <label> Price Installment - I/F</label>
              <input />
            </C.AreaInput>

            <C.AreaInput>
              <label> Installment - I/F</label>
              <input />
            </C.AreaInput>
          </C.GridInput>

          <C.AreaInput>
            <label>Description - Product</label>
            <textarea />
          </C.AreaInput>
        </C.Area>
      </form>
    </C.Container>
  );
};
