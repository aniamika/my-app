import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Colors } from './styledHelpers/Colors';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    background-color: ${Colors.gray01};
    min-height: 100vh;
    width: 100%;
    color: ${Colors.blue02};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 0.3px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }
  button {
    border: none;
    cursor: pointer;
    background: transparent;
    &:focus {
      outline: none;
    }
  }
  input {
    &:focus {
      outline: none;
    }
  }
  ::-webkit-scrollbar {
  border-radius: 6px;
  width: 7px;
  height: 7px;
  background-color: ${Colors.gray02};

  &-track {
    border-radius: 6px;
    width: 7px;
    background-color: transparent;

    &-piece {
      border-radius: 6px;
      background-color: ${Colors.gray02};
    }
  }

  &-thumb {
    border-radius: 6px;
    background-color: ${Colors.gray03};
  }
}
`

const GlobalStyles: FC = () => {
    return (
        <GlobalStyle />
    );
}
export default GlobalStyles;
