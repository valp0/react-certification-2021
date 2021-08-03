import React from 'react';
import styled from 'styled-components';
import noAcc from '../App/user_not-logged-in.png';

const AvatarComp = styled.img`
  vertical-align: middle;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
`;

function Avatar(props) {
  return <AvatarComp src={props.src || noAcc} alt="Avatar" />;
}

export default Avatar;
