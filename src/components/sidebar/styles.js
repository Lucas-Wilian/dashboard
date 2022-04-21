import styled from 'styled-components';
import { css } from 'styled-components';
import {
  AiFillBell,
  AiFillHome,
  AiOutlineSearch,
  FaGhost,
  FaShoppingCart,
  FaUserAlt,
} from '../styles/icons';

export const Container = styled.div`
  width: 230px;
  background: var(--bg-secondary);
  padding: 15px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 15px;
  h3 {
    font-size: 25px;
  }
`;

export const IconLogo = styled(FaGhost)`
  fill: var(--blue-primary);
  width: 30px;
  height: 30px;
`;

export const Area = styled.div`
  width: 100%;
  ul {
    list-style: none;
    margin-top: 20px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    li {
      display: flex;
      align-items: center;
      margin: 5px;
      padding: 10px 5px;
      height: 45px;
      cursor: pointer;
      color: var(--text);
      &:hover,
      &.active {
        background: var(--bg-secondary-darker);
        border-radius: 5px;
        color: var(--white);
      }
    }
    span {
      width: 29px;
      height: 29px;
      background: var(--blue-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      margin-left: auto;
    }
  }
`;
export const IconSearch = styled(AiOutlineSearch)`
  width: 20px;
  height: 20px;
  fill: var(--blue-primary);
  position: absolute;
  top: 4px;
  left: 5px;
`;
export const Search = styled.div`
  width: 100%;
  position: relative;
  margin-top: 10px;
  input {
    height: 28px;
    background: var(--white);
    width: 100%;
    color: var(--black);
    font-weight: 600;
    border: none;
    outline: none;
    border-radius: 5px;
    padding-left: 30px;
  }
`;

export const Divise = styled.div`
  height: 1px;
  width: 100%;
  border-bottom: solid 1px var(--text);
  margin: 20px 0;
`;

const iconCSS = css`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const IconHome = styled(AiFillHome)`
  ${iconCSS}
`;
export const IconProduct = styled(FaShoppingCart)`
  ${iconCSS}
`;
export const IconUser = styled(FaUserAlt)`
  ${iconCSS}
`;
export const IconNotification = styled(AiFillBell)`
  ${iconCSS}
`;
