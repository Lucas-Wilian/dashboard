import React from 'react';
import * as C from './styles';
import { ButtonStyle } from '../buttonStyle/buttonStyle';

export const FormResgister = () => {
  return (
    <C.Container>
      <C.HeadeForm>
        <h2>Product Registration/Change</h2>
        <span>
          <C.IconCloseModal />
        </span>
      </C.HeadeForm>
      <form>
        <C.Area>
          <C.AreaInput>
            <label>Title - Product</label>
            <input />
          </C.AreaInput>
          <C.GridArea>
            <C.GridInput>
              <C.AreaInput>
                <label>Price - Product</label>
                <input />
              </C.AreaInput>

              <C.AreaInput>
                <label>Promotion - Product</label>
                <input />
              </C.AreaInput>

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
              <C.ButtonArea>
                <ButtonStyle title={'ADD +'} style />
              </C.ButtonArea>
            </C.AreaInput>
          </C.GridArea>
        </C.Area>
      </form>
    </C.Container>
  );
};
