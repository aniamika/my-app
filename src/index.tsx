import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Reset } from 'styled-reset';
import MainPage from './MainPage';

ReactDOM.render(
  <>
    <Reset />
    <MainPage />
  </>,
  document.getElementById('root')
);
