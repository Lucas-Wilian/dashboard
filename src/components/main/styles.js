import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
  width: auto;
  height: 400px;
  background: var(--text);
  padding: 20px;
  border-radius: 5px;
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin-bottom: 10px;
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 890px;
  input {
    border: 1px solid var(--gray);
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background: var(--white);
    color: var(--black);
    font-size: 16px;
    outline: none;
    font-weight: 500;
    padding-left: 10px;
  }
`;

export const SearchIcon = styled.div``;

export const Products = styled.div``;
