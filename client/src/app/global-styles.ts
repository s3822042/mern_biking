import {createGlobalStyle} from "styled-components";


export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    user-select: none;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    overflow-x: hidden;
  }

  body {
    scroll-padding-top: 100px;
    font-family: 'Poppins', sans-serif;
  }

  .page__container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
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
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }


  }`;
