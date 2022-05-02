import styled from 'styled-components';

export const Container = styled.div`
  width: 90vw;
  height: 90vh;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--text);

  h2 {
    color: var(--white);
  }
  form {
    margin-top: 20px;
  }
`;

export const Area = styled.div`
  width: 100%;
  height: 100%;
`;

export const AreaInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    color: var(--text-light);
    font-size: 16px;
    font-weight: 600;
  }
  input {
    height: 25px;
    background: var(--text-light);
    border-radius: 5px;
    outline: none;
    color: var(--bg-primary);
  }
`;

export const GridInput = styled.div`
  display: flex;
  width: 100%;
`;

export const AreaRadio = styled.div``;
