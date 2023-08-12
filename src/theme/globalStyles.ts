import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.pallete.background.main};
    color: #fff;
  }
`;

export default GlobalStyle;
