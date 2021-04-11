import React, { FC } from 'react';
import styled from 'styled-components';
import { LeftMenu } from './components/LeftMenu/LeftMenu';
import Slider from './components/Slider/Slider';
import { TopBar } from './components/TopBar/TopBar';
import GlobalStyles from './GlobalStyle';

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
      <GlobalStyles />
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
