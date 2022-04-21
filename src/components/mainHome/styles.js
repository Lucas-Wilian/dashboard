import styled, { css } from 'styled-components';
import { AiFillProject, FaShoppingCart, FaUserAlt } from '../styles/icons';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 100vh;
  margin: 0 20px 20px;
  width: auto;
  min-height: 550px;
  max-height: 100%;
  background: var(--bg-main);
  padding: 20px;
  border-radius: 5px;
`;

export const Area = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  /* background: var(--bg-primary); */
  width: 100%;
  height: 120px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  /* padding: 5px; */
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 5px;
  span {
    font-weight: 600;
    font-size: 16px;
    color: var(--gray);
  }
`;

export const ProductInfo = styled.div`
  width: 23%;
  height: 100%;
  border-radius: 5px;
  background: var(--border);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  span {
    color: var(--text);
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenssagesUsers = styled.div`
  display: flex;
  height: 140px;
  width: 100vw;
  max-width: 100%;
  overflow-x: auto;
`;

export const MainProduct = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 460px;
  section {
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    margin: 10px;
    justify-content: space-between;
    padding: 0 15px;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
  ul {
    width: auto;
    height: auto;
    li {
      width: inherit;
      height: 40px;
      display: flex;
      align-items: center;
      margin: 10px;
      justify-content: space-between;
      padding: 5px 15px;
      background: var(--bg-secondary-darker);
      border-radius: 5px;
      border: 2px solid var(--border);
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        &:nth-child(4) {
          background: var(--blue-primary-light-hover);
          width: 90px;
          height: 100%;
          border-radius: 5px;
        }
        &.desactive {
          background: var(--red-primary-light-hover);
          width: 90px;
          height: 100%;
          border-radius: 5px;
        }
      }
      &:hover {
        cursor: pointer;
        background: var(--border);
      }
    }
  }
`;

const iconCSS = css`
  width: 25px;
  height: 25px;
  margin-bottom: 10px;
`;

export const IconProduct = styled(FaShoppingCart)`
  ${iconCSS}
  fill: var(--blue-primary);
  &:hover {
    fill: var(--blue-primary-light-hover);
    cursor: pointer;
  }
`;

export const IconUsers = styled(FaUserAlt)`
  ${iconCSS}
  fill: var(--purple-primary);
  &:hover {
    fill: var(--purple-primary-light-hover);
    cursor: pointer;
  }
`;

export const IconSale = styled(AiFillProject)`
  ${iconCSS}
  fill: var(--orange-primary);
  &:hover {
    fill: var(--orange-primary-light-hover);
    cursor: pointer;
  }
`;
