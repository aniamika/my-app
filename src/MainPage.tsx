import React, { FC } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { LeftMenu } from "./components/LeftMenu/LeftMenu";
import Pagination from "./components/Pagination/Pagination";
import Resume from "./components/Resume/Resume";
import Slider from "./components/Slider/Slider";
import { TopBar } from "./components/TopBar/TopBar";
import Workspaces from "./components/Workspaces/Workspaces";
import { Colors } from "./styledHelpers/Colors";
import { Margins } from "./styledHelpers/Margins";
import { Paddings } from "./styledHelpers/Paddings";

const MainContent = styled.main`
  flex: 6;
  margin-left: ${Margins[16]};
`;

const Content = styled.section`
  max-width: 1200px;
  padding: ${Paddings[8]} ${Paddings[16]};
  display: flex;
  margin: 0 auto;
  flex: auto;
`;

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
      <Scrollbar />
      <section>
        <TopBar />
        <Content>
          <LeftMenu />
          <MainContent>
            <Slider />
            <Workspaces />
            <Resume />
            <Pagination />
          </MainContent>
        </Content>
      </section>
    </>
  );
};
export default MainPage;
