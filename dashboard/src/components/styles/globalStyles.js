import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--white);
    letter-spacing: .6px;
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
  ::-webkit-scrollbar {
    width: 5px;
    background-color: var(--bg-primary);
    display: none;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--gray); 
    border-radius: 10px;
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--border); 
    border-radius: 10px;
    display: none;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--bg-secondary-darker); 
    display: none;
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

    --bg-main: #0F172A;
    --border:#293445 ;

    --blue-primary: #2C8ED6;
    --blue-primary-light-hover: #33A1F2;

    --turquoise-primary: #5eead4;
    --turquoise-primary-light-hover: #0d9488;

    --green-primary: '#34d399';
    --green-primary-light-hover: '#047857';

    --red-primary:  #e11d48;
    --red-primary-light-hover: #f43f5e;
    --pink-primary: #f06292;
    --pink-primary-light-hover:#e5b3c4;
    --purple-primary: #8b5cf6;
    --purple-primary-light-hover:  #7c3aed; 
    --orange-primary: #E27300;
    --orange-primary-light-hover: #FE9200;
  }
`;
