import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  /*@font-face {
    font-family: "omnes";
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: "omnes";
    font-weight: 700;
    font-style: normal;
    font-display: block;
  }*/

  html
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    --color-background: hsl(0, 0%, 5%);
    --color-background-translucent: hsla(0, 0%, 5%, 0.85);
    --color-primary: hsl(0, 0%, 90%);
    --color-primary-light: hsla(0, 0%, 90%, 0.85);
    --color-secondary: hsl(179, 93%, 39%);
    --color-secondary-hover: hsl(240, 100%, 70%);
    --color-error: hsl(343, 100%, 45%);
    --padding-global: 4%;
    padding-top: 80px;
    padding-bottom: 50px;
    background-color: var(--color-background);
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 19px;
    font-weight: 400;
    color: var(--color-primary);
    line-height: 1.3;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    -webkit-margin-before: 0;
    margin-block-start: 0;
    -webkit-margin-after: 0;
    margin-block-end: 0;
    -webkit-margin-start: 0;
    margin-inline-start: 0;
    -webkit-margin-end: 0;
    margin-inline-end: 0;
    font-size: inherit;
    font-weight: inherit;
  }

  a {
    text-decoration: none;
    -webkit-tap-hightext-color: hsla(0, 0%, 0%, 0);
    -webkit-tap-hightext-color: transparent;
    color: inherit;
  }

  button {
    display: inline-block;
    border: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: inherit;
    -webkit-tap-hightext-color: hsla(0, 0%, 0%, 0);
    -webkit-tap-hightext-color: transparent;
  }
  button:focus {
    outline: 0;
  }

  input {
    display: block;
    font: inherit;
    color: inherit;
    padding: 10px;
    border-style: none;
    border-color: initial;
    border-image: initial;
    width: 100%;
  }
  input:focus {
    outline: 0;
  }
`;
