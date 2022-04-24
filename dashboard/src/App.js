import React, { useState } from 'react';
import { Router } from './routes';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/globalStyles';
import { darkTheme, lightTheme } from './components/styles/theme';

import Modal from 'react-modal';

export const ThemeContext = React.createContext(null);

Modal.setAppElement('#root');

function App() {
  const [theme, setTheme] = useState('dark');
  const themeStyle = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <Router />
        <GlobalStyles />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
