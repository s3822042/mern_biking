import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    user-select: none;
    list-style: none;
  }

  html, body {
    overflow-x: hidden;
  }

  div {
    margin: 0;
    padding: 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    padding: 0;
    margin: 0;
  }

  }`;
