import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.label`
  position: relative;
  top: 10px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const Input = styled.input`
  position: absolute;
  left: -9999px;
  top: -9999px;
  &:checked + span {
    background-color: white;
    &:before {
      left: 18px;
      background-color: white;
    }
  }
`;

const Slider = styled.span`
  margin: 0 7px;
  display: flex;
  width: 36px;
  height: 8px;
  border-radius: 100px;
  background-color: black;
  position: relative;
  transition: 0.2s;
  &:before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    top: -5px;
    left: 0px;
    border-radius: 10px;
    background-color: black;
    transition: 0.22s;
  }
`;

const Text = styled.span`
  position: relative;
  margin: 0;
  top: -10px;
`;

function Toggle() {
  return (
    <Wrapper>
      <Input type="checkbox" />
      <Slider />
      <Text> Dark mode </Text>
    </Wrapper>
  );
}

export default Toggle;
