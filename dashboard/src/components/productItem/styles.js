import styled, { css } from 'styled-components';
import { AiFillDelete, AiFillEdit, AiFillEye } from '../styles/icons';

export const Container = styled.li`
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
    font-weight: 600;
    font-size: 16px;
  }
  &:hover {
    background: var(--text);
    transition: ease-in-out all 0.3s;
  }
`;
const iconCSS = css`
  width: 20px;
  height: 20px;
`;

export const IconEye = styled(AiFillEye)`
  ${iconCSS}
  fill: var(--blue-primary);
  &:hover {
    fill: var(--blue-primary-light-hover);
  }
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
