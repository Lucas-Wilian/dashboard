import React, { useContext, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
// import { ButtonStyle } from '../../components/buttonStyle/buttonStyle';
import {
  AiFillHome,
  AiFillBell,
  FaShoppingCart,
  FaUserAlt,
  AiOutlineLeft,
} from '../styles/icons';
import * as C from './styles';

export const SideBar = () => {
  const searchRef = useRef(null);
  const { theme, setTheme } = useContext(ThemeContext);
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const { pathname } = useLocation();
  const searchClickHandle = () => {
    if (!sidebarOpen) {
      setSideBarOpen(true);
      searchRef.current.focus();
    } else {
    }
  };

  const linksAray = [
    {
      label: 'Home',
      icon: <AiFillHome />,
      to: '/',
      notification: 5,
    },

    {
      label: 'Products',
      icon: <FaShoppingCart />,
      to: '/products',
      notification: 0,
    },

    {
      label: 'Users',
      icon: <FaUserAlt />,
      to: '/users',
      notification: 0,
    },

    {
      label: 'Notifications',
      icon: <AiFillBell />,
      to: '/notifications',
      notification: 1,
    },
  ];

  return (
    <C.Container isOpen={sidebarOpen}>
      <>
        <C.SideBarButton
          isOpen={sidebarOpen}
          onClick={() => setSideBarOpen((p) => !p)}
        >
          <AiOutlineLeft />
        </C.SideBarButton>
      </>
      <C.Logo>
        <C.LinkSidebar
          to='/'
          style={!sidebarOpen ? { width: 'fit-content' } : {}}
        >
          <C.IconBlank />
          {sidebarOpen && (
            <>
              <C.LogoTitle>BLANK</C.LogoTitle>
            </>
          )}
        </C.LinkSidebar>
      </C.Logo>

      <C.Search
        onClick={searchClickHandle}
        style={!sidebarOpen ? { width: 'fit-content' } : {}}
      >
        <C.SearchIcon>
          <C.IconSearch />
        </C.SearchIcon>
        <input
          ref={searchRef}
          placeholder='Searching'
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
        />
      </C.Search>
      <C.Divider />
      {linksAray.map(({ icon, to, label, notification }) => (
        <C.LinkContainer key={label} isActive={pathname === to}>
          <C.LinkSidebar
            to={to}
            style={!sidebarOpen ? { width: 'fit-content' } : {}}
          >
            <C.LinkIcon>{icon}</C.LinkIcon>
            {sidebarOpen && (
              <>
                <C.LinkLabel>{label}</C.LinkLabel>
                {/*Se a variavel notificação for 0 ou Null, não ira aparecer nada para o usuario*/}
                {!!notification && (
                  <C.LinkNotification>{notification}</C.LinkNotification>
                )}
              </>
            )}
          </C.LinkSidebar>
        </C.LinkContainer>
      ))}

      <C.Divider />
      <C.Theme>
        {sidebarOpen && <C.ThemeLabel>Dark Mode</C.ThemeLabel>}
        <C.ThemeToggler
          isActive={theme === 'dark'}
          onClick={() => setTheme((p) => (p === 'light' ? 'dark' : 'light'))}
        >
          <C.ToggleThumb style={theme === 'dark' ? { right: '1px' } : {}} />
        </C.ThemeToggler>
      </C.Theme>
    </C.Container>
  );
};
