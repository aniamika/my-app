import React, { FC } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { LeftMenu } from './components/LeftMenu/LeftMenu';
import { TopBar } from './components/TopBar/TopBar';
import { Colors } from './styledHelpers/Colors';
import { fontSize } from './styledHelpers/FontSize';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${Colors.gray01};
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;
    color: ${Colors.blue02};
    font-weight: 400;
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
            Main Page Main Content
          </MainContent>
        </Content>
      </MainPageWrapper>
    </>
  );
}
export default MainPage;
