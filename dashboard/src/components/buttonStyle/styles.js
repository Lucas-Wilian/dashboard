import styled from 'styled-components';

export const Container = styled.button`
  width: auto;
  padding: 8px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: auto;
  background: ${(props) =>
    props.style ? ({ theme }) => theme.bluePrimary : ({ theme }) => theme.bg2};
  border: 1px solid
    ${(props) =>
      props.style ? ({ theme }) => theme.white : ({ theme }) => theme.borde};

  :hover {
    background: ${(props) =>
      props.style
        ? ({ theme }) => theme.bluePrimaryLighthover
        : ({ theme }) => theme.bg};
  }
`;
