import React from 'react';
import styled from 'styled-components';
import { useAppearance } from '../../providers/Appearance';
import { types } from '../../utils/constants';
import SideMenu from '../SideMenu/SideMenu.component';

const ButtonBar = styled.div`
  height: 2px;
  width: 20px;
  border-radius: 1px;
  background-color: ${props => props.dark ? 'white' : 'black'};
  margin: 4px 0px;
  transition: 0.5s ease-out;
`;

const Button = styled.button`
  border: 3px solid transparent;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  width: 30px;
  height: 30px;
  padding: 0px 2px;
  transition: 0.2s ease-out;
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 0px 37px rgba(255, 255, 255, 1);
  }
  &:active {
    padding: 0px 2.5px;
    background-color: rgba(77, 77, 77, 0.3);
    border-style: inset;
    border-color: rgba(37, 37, 37, 0.27);
  }
`;

function NavButton() {
  const [appearance, dispatch] = useAppearance();
  const { darkMode } = appearance;

  const show = () => {
    dispatch({ type: types.SHOW_MENU });
    dispatch({ type: types.HIDE_CTNT });
  }

  return (
    <>
      <Button onClick={show} >
        <ButtonBar dark={darkMode} data-testid="button-bar" />
        <ButtonBar dark={darkMode} />
        <ButtonBar dark={darkMode} />
      </Button>
      <SideMenu />
    </>
  );
}

export default NavButton;
