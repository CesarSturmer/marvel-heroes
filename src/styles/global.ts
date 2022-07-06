import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body { 
    overflow-y: scroll;
    overflow-x: hidden;
    font-family: 'Roboto Condensed', sans-serif;
    background-color: ${({ theme }) => theme.comom.white};
  }


  a {
    text-decoration: none;
    cursor: pointer;
  }

`;
