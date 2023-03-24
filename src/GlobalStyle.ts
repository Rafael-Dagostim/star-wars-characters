import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  letter-spacing: 0.15em;
  }

  body {
    background: #120F23;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  h1,h2,h3,h4,h5,h6,p,input{
    font-family: StarJedi, 'Spline Sans Mono', monospace;
    color: white;
    font-weight: 400;
  }
`