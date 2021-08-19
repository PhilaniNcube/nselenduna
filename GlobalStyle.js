import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
    --brown: #311513;
    --white: #f8f1ff;
    --red: #f42c04;
    --dark: #1a281f;
    --blue: #0e34a0;
    --title: clamp(3rem, 1.9307rem + 3.9604vw, 7rem);
    --subheading: clamp(1.6rem, 1.3861rem + 0.7921vw, 2.4rem);
    --section-title:  clamp(2.2rem, 1.7188rem + 1.7822vw, 4rem);
}

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
      font-size: 62.5%;

  }

  body {
      font-family: 'Montserrat', sans-serif;
      line-height: 1.6;

  }

  h1, h2, h3, h4 {
      line-height: 1.1;
  }

  a {
      text-decoration: none;
      color: inherit;
  }

  ul, ol, li {
      list-style-type: none;
  }

  .container {
      margin: 0 auto;
      width: 90%;
      min-width: 270px;
      max-width: 1280px;
  }

  .title {
      font-size: var(--title);
      font-weight: 400;
  }

  .subheading {
      font-size: var(--subheading);
  }

  .section-title {
      font-size: var(--section-title);
      font-weight: 700;
      color: var(--brown);
      
  }



`;

export default GlobalStyle;
