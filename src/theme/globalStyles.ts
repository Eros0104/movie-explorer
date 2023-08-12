import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    background-color: #141414;
    color: #fff;
  }
`;

export default GlobalStyle;
