import styled from 'styled-components';
import { AiFillMessage } from '../styles/icons';

export const Container = styled.div`
  width: 235px;
  min-width: 230px;
  height: 100%;
  background: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--border);
  border-radius: 5px;
  margin-right: 5px;
`;

export const IconMenssage = styled(AiFillMessage)`
  fill: var(--turquoise-primary);
  width: 24px;
  height: 24px;
`;

export const Area = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Titlemenssage = styled.h3`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
`;

export const DataMessage = styled.p`
  font-size: 14px;
  color: var(--text);
`;
