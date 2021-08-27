import React from 'react';
import styled from "styled-components";
import Authenticate from '../Authenticate';
import { useAppearance } from "../../providers/Appearance";

const Main = styled.main`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.dark ? "rgba(7, 7, 7, 0.77)" : "rgb(240, 240, 240)"};
  transition: 0.5s ease-out, margin-right 0s;
  color: ${props => props.dark ? "white" : "black"};
  height: calc(100vh - 3rem);
  overflow-y: ${props => props.sideMenu ? "hidden" : "auto"};
`;

const HideView = styled.div`
  position: absolute;
  width: calc(100vw);
  height: calc(100vh - 3rem);
  background-color: rgba(7, 7, 7, 0.7);
  z-index: 9;
  opacity: ${props => props.hideContent ? "1" : "0"};
  visibility: ${props => props.hideContent ? "visible" : "hidden"};
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
`;

const Content = styled.div`
  width: ${props => props.sideMenu ? "calc(100vw - 4px)" : "100vw"};
`;

function Layout({ children }) {
  const [appearance] = useAppearance();
  const { darkMode, sideMenu, hideContent } = appearance;

  return (
    <>
      <HideView hideContent={hideContent} />
      <Main name="layout" dark={darkMode} sideMenu={sideMenu}>
        <Content sideMenu={sideMenu}>
          {children}
        </Content>
      </Main>
      <Authenticate />
    </>
  )
}

export default Layout;
