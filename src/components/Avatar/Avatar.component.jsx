import React from 'react';
import styled from 'styled-components';
import noAcc from '../Header/user_not-logged-in.png';

const AvatarComp = styled.img`
  vertical-align: middle;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
`;

function Avatar(props) {
  return <AvatarComp src={props.src || noAcc} alt="Avatar" />;
}

export default Avatar;
