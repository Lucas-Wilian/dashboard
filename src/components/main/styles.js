import styled, { css } from 'styled-components';
import { AiFillDelete, AiFillEdit, AiOutlineSearch } from '../styles/icons';

export const Container = styled.div`
  margin: 20px;
  width: auto;
  height: 100%;
  max-height: 550px;
  background: var(--bg-main);
  padding: 20px;
  border-radius: 5px;
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

const iconCSS = css`
  width: 20px;
  height: 20px;
`;

export const IconSearch = styled(AiOutlineSearch)`
  position: absolute;
  width: 23px;
  height: 23px;
  left: 7px;
  fill: var(--blue-primary);
`;

export const IconDelete = styled(AiFillDelete)`
  ${iconCSS}
  fill: var(--red-primary);
  &:hover {
    fill: var(--red-primary-light-hover);
  }
`;

export const IconEdit = styled(AiFillEdit)`
  ${iconCSS}
  fill: var(--purple-primary);
  &:hover {
    fill: var(--purple-primary-light-hover);
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
    li {
      margin: 5px 0;
      height: 40px;
      border-radius: 5px;
      background: var(--bg-secondary-darker);
      border: 2px solid var(--border);
      cursor: pointer;
      padding: 0 8px;
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      div {
        width: 80px;
        display: flex;
        justify-content: space-between;
      }
      span {
        font-weight: bold;
        font-size: 16px;
      }
      &:hover {
        background: var(--text);
        transition: ease-in-out all 0.3s;
      }
    }
  }
`;
