import styled from 'styled-components';
import { AiOutlineClose } from '../styles/icons';

export const Container = styled.div`
  width: 60vw;
  /* height: 50vh; */
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: var(--text); */

  h2 {
    color: var(--bg-secondary);
  }
  form {
    width: 100%;
    border-top: 1px solid var(--text);
    margin-top: 10px;
  }
`;

export const HeadeForm = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  align-items: center;
  span {
    width: 30px;
    height: 30px;
    background: var(--pink-primary-light-hover);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const IconCloseModal = styled(AiOutlineClose)`
  width: 20px;
  height: 20px;
  fill: var(--red-primary-light-hover);
`;

export const Area = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 5px;
`;

export const AreaInput = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: var(--blue-primary);
    font-size: 14px;
    margin-bottom: 10px;
  }
  input,
  textarea {
    border: 1px solid var(--border);
    border-radius: 3px;
    outline: none;
    color: var(--bg-main);
    font-weight: 500;
    padding-left: 10px;
  }
  input {
    height: 40px;
    width: 100%;
  }
  textarea {
    width: 35vw;
    min-height: 200px;
  }
`;

export const GridInput = styled.div`
  width: 40%;
  margin-right: 15px;
`;

export const GridArea = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;

export const ButtonArea = styled.div`
  width: 90px;
  height: 45px;
  margin-top: 10px;
`;
