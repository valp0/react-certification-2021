import React, { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../../providers/State";

const Main = styled.main`
  background-color: ${props => props.dark ? "rgba(7, 7, 7, 0.77)" : "rgba(77, 77, 77, 0.07)"};
  transition: 0.5s ease-out;
  min-height: calc(100vh - 3rem);
  color: ${props => props.dark ? "white" : "black"};
`;

function Layout({ children }) {
  const [state] = useContext(StateContext);
  const { darkMode } = state;

  return (
    <Main name="layout" dark={darkMode}>
      {children}
    </Main>
  )
}

export default Layout;
