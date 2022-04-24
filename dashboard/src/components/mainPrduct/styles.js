import styled from 'styled-components';
import { AiOutlineSearch } from '../styles/icons';

export const Container = styled.div`
  margin: 20px;
  width: auto;
  height: 100%;
  max-height: 550px;
  background: var(--bg-main);
  padding: 20px;
  border-radius: 5px;
`;

export const Add = styled.div`
  display: flex;
  flex: 1;

  width: 100%;
  justify-content: flex-end;
`;

export const Header = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  margin-bottom: 10px;
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 890px;
  position: relative;
  input {
    border: 1px solid var(--gray);
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background: var(--white);
    color: var(--black);
    font-size: 17px;
    outline: none;
    font-weight: 500;
    padding-left: 30px;
  }
`;

export const TitleProduct = styled.div`
  background: transparent;
  border: none;
  display: flex;
  padding: 0 20px;
  margin: 15px 0;
  font-weight: bold;
  justify-content: space-between;
`;

export const Products = styled.div`
  width: 100%;
  overflow-y: auto;
  height: 360px;
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    width: inherit;
  }
`;

export const IconSearch = styled(AiOutlineSearch)`
  position: absolute;
  width: 23px;
  height: 23px;
  left: 7px;
  fill: var(--blue-primary);
`;
