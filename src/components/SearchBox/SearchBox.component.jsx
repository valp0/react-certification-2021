import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
// import { useAppearance } from '../../providers/Appearance';
import { types } from '../../utils/constants';
import { useSearch } from '../../providers/Search/Search.provider';

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

function SearchBox() {
  // const [state, dispatch] = useAppearance();
  const [state, dispatch] = useSearch();
  const [value, setValue] = useState("");
  const history = useHistory();
  const ENTER_KEY = 13;

  function searchIt(e) {
    let search = e.target.value.trim()
    if (state.query !== search) {
      dispatch({ type: types.QUERY, term: search });
    }

    const currentPath = window.location.pathname;
    if (currentPath !== '/') {
      history.push('/');
    }
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  function query(e) {
    if (e.keyCode === ENTER_KEY) searchIt(e);
  }

  return (
    <TextBox
      className="search-box"
      data-testid="search-box"
      type="text"
      placeholder="Search"
      value={value}
      onChange={handleChange}
      onKeyDown={query}
    />
  );
}

export default SearchBox;
