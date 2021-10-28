// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #252529;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    .btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:visited {
      background-color: #ff8400 !important;
  }
  }
`;
 
export default GlobalStyle;