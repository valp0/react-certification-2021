import React from 'react';
import styled from 'styled-components';
import { types } from '../../utils/constants';
import noAcc from '../App/user_not-logged-in.png';
import { useAccount } from '../../providers/Account';

const AvatarComp = styled.img`
  vertical-align: middle;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
`;

function Avatar({ ...rest }) {
  const [state, dispatch] = useAccount();
  const { authenticated, userAvatar } = state;

  function logUser() {
    dispatch({ type: types.OPEN_MODAL });
  }

  return (
    <>
      <AvatarComp {...rest} src={authenticated ? userAvatar || noAcc : noAcc} alt="Avatar" onClick={logUser} />
    </>
  )
}

export default Avatar;
