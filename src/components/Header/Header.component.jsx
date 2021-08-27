import React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';
import Toggle from '../Toggle';
import NavButton from '../NavButton';
import SearchBox from '../SearchBox';
import { useAppearance } from '../../providers/Appearance';

const HToggle = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 14px;
  cursor: pointer;
  @media (max-width: 620px) {
    display: none;
  }
`;

const HSearchBox = styled.span`
  margin-top: -1px;
`;

const HAvatar = styled.span`
  margin-left: auto;
  @media (max-width: 500px) {
    display: none;
  }
`;

const HButton = styled.span`
  margin-top: 2px;
  margin-right: 10px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DMText = styled.span`
  position: relative;
  margin: 0;
  margin-left: 2px;
  top: 1px;
  color: ${props => props.dark ? 'white' : 'black'};
  transition: 0.5s ease-out;
`;

const SHeader = styled.nav`
  position: sticky;
  top: 0rem;
  z-index: 10;
  box-shadow: 0px 2px 4px ${props => props.dark ? 'rgba(70, 18, 11, 0.7)' : 'rgba(100, 100, 100, 0.7)'};
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  padding: 0 10px;
  transition: 0.5s ease-out;
  background: ${props => props.dark ? 'rgb(140, 35, 21)' : 'rgb(238, 59, 27)'};
  user-select: none;
`;

function Header() {
  const [state] = useAppearance();
  const { darkMode } = state;

  return (
    <SHeader name="header" dark={darkMode}>
      <FlexContainer>
        <HButton>
          <NavButton />
        </HButton>

        <HSearchBox>
          <SearchBox />
        </HSearchBox>
      </FlexContainer>

      <FlexContainer>
        <HToggle>
          <Toggle />
          <DMText dark={darkMode}>
            Dark mode
          </DMText>
        </HToggle>

        <HAvatar>
          <Avatar title="header-avatar" />
        </HAvatar>
      </FlexContainer>
    </SHeader>
  );
}

export default Header;
