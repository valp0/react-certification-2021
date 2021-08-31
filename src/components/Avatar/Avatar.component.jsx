import React from 'react';
import styled from 'styled-components';
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
  const { accountCtx, AccountFns } = useAccount();
  const { authenticated, userAvatar } = accountCtx;

  function logUser() {
    AccountFns.openModal();
  }

  return (
    <>
      <AvatarComp {...rest} src={authenticated ? userAvatar || noAcc : noAcc} alt="Avatar" onClick={logUser} />
    </>
  )
}

export default Avatar;
