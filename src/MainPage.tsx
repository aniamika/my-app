import React, { FC } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { LeftMenu } from "./components/LeftMenu/LeftMenu";
import Pagination from "./components/Pagination/Pagination";
import { TopBar } from "./components/TopBar/TopBar";
import { Colors } from "./styledHelpers/Colors";
import { Margins } from "./styledHelpers/Margins";
import { Paddings } from "./styledHelpers/Paddings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import WorkspacePage from "./pages/WorkspacePage/WorkspacePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import EntitiesPage from "./pages/EntitiesPage/EntitiesPage";
import TestPage from "./pages/TestPage/TestPage";

const MainContent = styled.main`
  flex: 6;
  overflow: hidden;
  margin-left: ${Margins[16]};
`;

const Content = styled.section`
  max-width: 1200px;
  padding: ${Paddings[24]} ${Paddings[16]} ${Paddings[8]} ${Paddings[16]};
  display: flex;
  margin: 0 auto;
  flex: auto;
  overflow: auto;
`;

const MainBox = styled.section`
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
`
const GlobalStyle = createGlobalStyle`
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
`;
const Reset = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  button {
    border: none;
    cursor: pointer;
    background: transparent;
    &:focus {
      outline: none;
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input {
    &:focus {
      outline: none;
    }
  }
`;

const Scrollbar = createGlobalStyle`
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
`;

const MainPage: FC = () => {
  return (
    <>
    <Reset />
    <GlobalStyle />
    <Router>
      <Scrollbar />
      <TopBar />
      <MainBox>
        <Content>
          <LeftMenu/>
          <MainContent>
            
            <Switch>
              <Route path="/entities" exact>
                  <EntitiesPage />
              </Route> 
              <Route path="/profile" exact>
                  <ProfilePage />
              </Route> 
              <Route path="/workspace" exact>
                  <WorkspacePage />
              </Route> 
              <Route path="/test" exact>
                  <TestPage />
              </Route> 
              <Route path="/" exact>
                <HomePage/>
              </Route>
            </Switch>

            <Pagination />
          </MainContent>
        </Content>
      </MainBox>
    </Router>
    </>
  );
};
export default MainPage;
