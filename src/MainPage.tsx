import React, { FC, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { LeftMenu } from "./components/LeftMenu/LeftMenu";
import { TopBar } from "./components/TopBar/TopBar";
import { Colors } from "./styledHelpers/Colors";
import { Margins } from "./styledHelpers/Margins";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import WorkspacePage from "./pages/WorkspacePage/WorkspacePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import EntitiesPage from "./pages/EntitiesPage/EntitiesPage";
import TestPage from "./pages/TestPage/TestPage";
import { useDispatch } from "react-redux";
import { Padding } from "./styledHelpers/Padding";
import { getPosts } from "./actions/postsActions";
import { getComments } from "./actions/commentsActions";
import { getAlbums } from "./actions/albumsActions";
import { getPhotos } from "./actions/photosActions";
import { getTodos } from "./actions/todosActions";
import { getUsers } from "./actions/usersActions";

type GetPosts = ReturnType<typeof getPosts>;
type GetComments = ReturnType<typeof getComments>;
type GetAlbums = ReturnType<typeof getAlbums>;
type GetPhotos = ReturnType<typeof getPhotos>;
type GetTodos = ReturnType<typeof getTodos>;
type GetUsers = ReturnType<typeof getUsers>;

const MainContent = styled.main`
  flex: 6;
  overflow: hidden;
  margin-left: ${Margins[16]};
`;
const Content = styled.section`
  max-width: 1200px;
  padding: ${Padding[24]} ${Padding[16]} ${Padding[8]} ${Padding[16]};
  display: flex;
  margin: 0 auto;
  flex: auto;
  overflow: auto;
`;
const MainBox = styled.section`
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 3rem);
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
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch<GetPosts>(getPosts());
  }, []);

  useEffect(()=> {
    dispatch<GetComments>(getComments());
  }, []);

  useEffect(() => {
    dispatch<GetAlbums>(getAlbums());
  }, []);

  useEffect(()=> {
    dispatch<GetPhotos>(getPhotos());
  }, []);

  useEffect(() => {
    dispatch<GetTodos>(getTodos());
  }, []);

  useEffect(() => {
    dispatch<GetUsers>(getUsers());
  }, []);

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

          </MainContent>
        </Content>
      </MainBox>
    </Router>
    </>
  );
};
export default MainPage;
