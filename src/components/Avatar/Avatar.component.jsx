import React, { useContext } from 'react';
import styled from 'styled-components';
import noAcc from '../App/user_not-logged-in.png';
import { StateContext } from '../../providers/State';
import { types } from '../../utils/constants';

const AvatarComp = styled.img`
  vertical-align: middle;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
`;

function Avatar(props) {
  const [state, dispatch] = useContext(StateContext);
  const { loggedIn } = state;

  function logUser() {
    if (loggedIn) {
      dispatch({ type: types.USER_LOGOUT });
    } else {
      dispatch({ type: types.USER_LOGIN });
    }
  }

  return <AvatarComp src={props.src || noAcc} alt="Avatar" onClick={logUser} />;
}

export default Avatar;
