import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { btnReset, V } from '../styles/variable';
import { AiOutlineSearch, FaGhost } from '../styles/icons';

export const Container = styled.div`
  width: ${({ isOpen }) => (!isOpen ? 'auto' : V.sidebarWidth)};
  background: ${({ theme }) => theme.bg4};
  height: 100vh;
  padding: ${V.lgSpacing};
  position: relative;
  transition: 0.3s ease-in-out;
`;

export const Logo = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  margin-bottom: ${V.lgSpacing};

  color: inherit;
  font-size: 16px;
  padding: calc(${V.smSpacing});
`;

export const LogoTitle = styled.h3`
  margin-left: 60px;
  text-align: center;
  font-size: 20px;
`;

export const IconBlank = styled(FaGhost)`
  fill: var(--blue-primary);
  width: 30px;
  height: 30px;
`;

export const Search = styled.div`
  background: ${({ theme }) => theme.textLight};
  border: 1px solid ${({ theme }) => theme.bg3};
  border-radius: ${V.borderRadius};
  input {
    padding: 0 ${V.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 16px;
    width: 100%;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.border};
    background: transparent;
  }
  display: flex;
`;

export const SearchIcon = styled.button`
  ${btnReset}
  padding: calc(${V.mdSpacing} - 2px) ${V.mdSpacing};
  display: flex;

  /* path: red; */
  cursor: pointer;
  svg {
    font-size: 20px;
  }
`;

export const IconSearch = styled(AiOutlineSearch)`
  fill: ${({ theme }) => theme.bluePrimary};
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.text};
  margin: ${V.lgSpacing} 0;
`;

export const LinkContainer = styled.div`
  background: ${({ theme, isActive }) => (!isActive ? 'trasparent' : theme.bg)};
  border-radius: ${V.borderRadius};
  margin: 8px 0;
  :hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.border};
    background: ${({ theme }) => theme.bg2};
  }
`;

export const LinkSidebar = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${V.smSpacing});
`;

export const LinkIcon = styled.div`
  padding: ${V.smSpacing} ${V.mdSpacing};
  display: flex;
  svg {
    font-size: 20px;
  }
`;

export const LinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: ${V.smSpacing};
`;

export const LinkNotification = styled.div`
  font-size: 14px;
  padding: calc(${V.smSpacing} / 2) ${V.smSpacing};
  border-radius: calc(${V.borderRadius} / 2);
  background: ${({ theme }) => theme.bluePrimary};
  color: white;
  margin-right: ${V.smSpacing};
`;

export const Theme = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const ThemeLabel = styled.span`
  display: block;
  flex: 1;
`;

export const ThemeToggler = styled.button`
  ${btnReset}
  margin: 0 auto;
  cursor: pointer;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: ${({ theme, isActive }) => (!isActive ? theme.bg2 : theme.bg)};
  position: relative;
`;

export const ToggleThumb = styled.div`
  height: 18px;
  width: 18px;
  position: absolute;
  top: 1px;
  bottom: 1px;
  transition: 0.2s ease right;
  right: calc(100% - 18px - 1px);
  border-radius: 50%;
  background: ${({ theme }) => theme.bg4};
`;

export const SideBarButton = styled.div`
  ${btnReset}
  position: absolute;
  top: ${V.xxlSpacing};
  right: ${({ isOpen }) => (isOpen ? '-16px' : '-15px')};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
  box-shadow: 0 0 4px ${({ theme }) => theme.bg3},
    0 0 7px ${({ theme }) => theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: ${({ isOpen }) => (!isOpen ? 'rotate(180deg)' : 'initial')};
  transition: 0.3s ease-in-out;
`;
