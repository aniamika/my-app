import React, { FC } from 'react';
import styled from 'styled-components';
import { LeftMenu } from './components/LeftMenu/LeftMenu';
import { TopBar } from './components/TopBar/TopBar';
import { Colors } from './styledHelpers/Colors';

const MainPageWrapper = styled.section`
  background-color: ${Colors.gray};
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 4;
  margin-left: 16px;
`;

const Content = styled.section`
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
  flex: auto;
`;

const MainPage: FC = () => {
  return (
    <MainPageWrapper>
      <TopBar/>
      <Content>
        <LeftMenu />
        <MainContent>
          Main Page Main Content
        </MainContent>
      </Content>
    </MainPageWrapper>
  );
}
export default MainPage;
