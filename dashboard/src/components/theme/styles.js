import styled from 'styled-components';
import { V } from '../styles/variable';

export const Container = styled.div`
  display: flex;
  background: var(--bg-primary);
  width: 100%;
  height: 100vh;
`;

export const Area = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: calc(${V.smSpacing} * 2);
`;
