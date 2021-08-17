import React, { useContext } from 'react';
import styled from 'styled-components';
import { StateContext } from '../../providers/State';
import { types } from '../../utils/constants';

const transition = '0.15s ease-in, background-color 0.5s ease-out';
const lightColor = 'black';
const darkColor = 'white';

const Wrapper = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  width: 46px;
  height: 20px;
`;

const Input = styled.input`
  position: absolute;
  left: -9999px;
  top: -9999px;
  &:checked + span {
    background-color: ${darkColor};
    &:before {
      left: 18px;
      background-color: ${darkColor};
    }
    // &:after {
    //   content: 'Dark mode';
    //   color: ${darkColor};
    //   transition: ${transition};
    // }
  }
`;

const Slider = styled.span`
  margin: 0 5px;
  width: 36px;
  height: 8px;
  border-radius: 100px;
  background-color: ${lightColor};
  position: relative;
  top: 7px;
  transition: ${transition};
  &:before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    top: -5px;
    left: 0px;
    border-radius: 10px;
    background-color: ${lightColor};
    transition: ${transition};
  }
  // &:after {
  //   content: 'Light mode';
  //   color: ${lightColor};
  //   width: 100px;
  //   position: absolute;
  //   top: -10px;
  //   left: 43px;
  //   transition: ${transition};
  // }
`;

function Toggle() {
  const [state, dispatch] = useContext(StateContext);
  const { darkMode } = state;

  function handleToggle() {
    if (state.darkMode === false) {
      dispatch({ type: types.TOGGLE_DARK_ON });
    } else {
      dispatch({ type: types.TOGGLE_DARK_OFF });
    }
  }

  return (
    <Wrapper>
      <Input type="checkbox" onChange={handleToggle} checked={darkMode} />
      <Slider />
    </Wrapper>
  );
}

export default Toggle;
