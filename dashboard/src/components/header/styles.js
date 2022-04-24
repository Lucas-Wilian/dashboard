import styled from 'styled-components';
import { FaShoppingCart } from '../styles/icons';

export const Container = styled.div`
  margin: 20px;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background: var(--bg-main);
  border-radius: 5px;
`;

export const Logo = styled.div`
  height: 50px;
  width: 50px;
  background: var(--bg-secondary-darker);
  border-radius: 5px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconPage = styled(FaShoppingCart)`
  width: 26px;
  height: 26px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h3 {
    font-weight: bold;
  }
  span {
    color: var(--gray);
  }
`;
