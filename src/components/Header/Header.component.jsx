import React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';
import Toggle from '../Toggle';
import NavButton from '../NavButton';
import SearchBox from '../SearchBox';

const HToggle = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 0 20px;
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

const SHeader = styled.nav`
  box-shadow: 0px 2px 4px rgba(100, 100, 100, 0.7);
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  overflow: hidden;
  padding: 0 10px;
`;

function Header(props) {

  return (
    <SHeader name="header">
      <FlexContainer>
        <HButton>
          <NavButton />
        </HButton>

        <HSearchBox>
          <SearchBox handler={props.handler} />
        </HSearchBox>
      </FlexContainer>

      <FlexContainer>
        <HToggle>
          <Toggle />
        </HToggle>

        <HAvatar>
          <Avatar src={props.avatar} />
        </HAvatar>
      </FlexContainer>
    </SHeader>
  );
}

export default Header;
