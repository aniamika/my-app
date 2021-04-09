import React, { FC } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { LeftMenu } from './components/LeftMenu/LeftMenu';
import Slider from './components/Slider/Slider';
import { TopBar } from './components/TopBar/TopBar';
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
  }
`

const MainPageWrapper = styled.section`
`;

const MainContent = styled.main`
  flex: 6;
  margin-left: 16px;
`;

const Content = styled.section`
  max-width: 1200px;
  padding: 8px 16px;
  display: flex;
  margin: 0 auto;
  flex: auto;
`;

const MainPage: FC = () => {
  return (
    <>
      <GlobalStyle />
      <MainPageWrapper>
        <TopBar/>
        <Content>
          <LeftMenu />
          <MainContent>
            <Slider/>
          </MainContent>
        </Content>
      </MainPageWrapper>
    </>
  );
}
export default MainPage;
