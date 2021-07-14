import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        user-select: none;
        list-style: none;
    }
    html,body {
      overflow-x: hidden;
    }
}`;
