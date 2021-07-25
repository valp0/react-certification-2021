import React from 'react';
import styled from 'styled-components';

const TextBox = styled.input`
  width: 50vw;
  height: 30px;
  font-size: 17pt;
  border: none;
  border-radius: 5px;
  opacity: 87%;
  transition: 0.7s;
  padding: 0 9px;
  &:focus {
    outline: none;
    opacity: 100%;
    transition: 0.7s;
  }
  &:hover {
    border: none;
    opacity: 100%;
    transition: 0.7s;
  }
  @media (min-width: 700px) {
    width: 350px;
  }
  @media (max-width: 620px) and (min-width: 500px) {
    width: calc(100vw - 127px);
  }
  @media (max-width: 500px) {
    width: calc(100vw - 79px);
  }
`;

function SearchBox(props) {
  return (
    <TextBox
      className="search-box"
      data-testid="search-box"
      type="text"
      placeholder={props.placeholder}
    />
  );
}

export default SearchBox;
