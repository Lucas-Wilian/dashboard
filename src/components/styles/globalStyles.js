import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--white);
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: Inter var,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  }
  html {
    background: var(--primary);
  }
  :root {
    --black: #000;
    --white: #fff;
    --text: #94a3b8;
    --text-light: #f8fafc; 
    --bg-primary: #0B1121;
    --bg-secondary-light : #193A4D;
    --bg-secondary: #334155;
    --bg-secondary-darker: #1E293B;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --blue-primary: #2C8ED6;
    --blue-primary-light-hover: #33A1F2;
    --red-primary:  #e11d48;
    --red-primary-light-hover: #f43f5e;
    --purple-primary: #8b5cf6;
    --purple-primary-light-hover:  #7c3aed; 
  
    --orange-primary: #E27300;
    --orange-primary-light-hover: #FE9200;
  }
`;
