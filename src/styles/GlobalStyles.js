import { createGlobalStyle } from 'styled-components';

import ApercuArabicPro from '../assets/fonts/ApercuArabicPro.woff';

export const GlobalStyles = createGlobalStyle`
  *::before,
  *::after {
    box-sizing: inherit;
  }
  @font-face {
    font-family: 'ApercuArabicPro';
    src: url(${ApercuArabicPro}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
    font-display: swap;
  }
 
  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    font-family: 'ApercuArabicPro';
    font-size: 18px;
    line-height: 32px;
    color: #3E3E3E;
  }
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style-type: none;
  }
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    outline: none;
  }
  button {
    padding: 0;
  }
`;
