import React, { useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Toggle from '../Toggle';
import { useAppearance } from '../../providers/Appearance';
import Avatar from '../Avatar';
import { useAccount } from '../../providers/Account';

const SideBar = styled.nav`
  background-color: ${props => props.dark ? 'rgb(140, 35, 21)' : 'rgb(238, 59, 27)'};
  box-shadow: 2px 2px 4px ${props => props.show ? props.dark ? 'rgba(70, 18, 11, 0.7)' : 'rgba(100, 100, 100, 0.7)' : 'none'};
  color: ${props => props.dark ? 'white' : 'black'};
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 100vh;
  @media (max-width: 500px) {
    width: 100vw;
  }
  z-index: 20;
  position: fixed;
  top: 0px; 
  left: ${props => props.show ? '0px' : '-375px'};
  @media (max-width: 500px) {
    left: ${props => props.show ? '0px' : 'calc(-100vh - 4px)'};
  }
  transition: 0.2s ease-in-out, background-color 0.5s ease-out;
  user-select: none;
`;

const CloseBtn = styled.label`
  text-align: center;
  vertical-align: middle;
  line-height: 58px;
  height: auto;
  width: 58px;
  font-size: 36px;
  cursor: pointer;
  margin-right: 7px;
  margin-left: auto;
  @media (max-width: 500px) {
    margin-left: 0;
  }
  transition: 0.5s ease-out;
  color: ${props => props.$dark ? 'white' : 'black'};
  &:hover {
    color: ${props => props.$dark ? 'black' : 'white'};
    text-shadow: white ${props => props.$dark && '0px 0px 10px,'} 0px 0px 5px;
  }
`;

const NavLink = styled(Link)`
  font-size: 25px;
  transition: 0.5s ease-out;
  color: ${props => props.$dark ? 'white' : 'black'};
  width: 250px;
  padding: 0px 25px;
  margin: 7px;
  &:hover {
    color: ${props => props.$dark ? 'black' : 'white'};
    text-shadow: white ${props => props.$dark && '0px 0px 10px, black'} 0px 0px 5px;
    transition: 0.3s;
  }
`;

const NavToggle = styled.label`
  cursor: pointer;
  height: auto;
  width: 46px;
  margin: 0 17px;
  @media (min-width: 620px) {
    display: none;
  }
`;

const NavAvatar = styled.label`
  width: 58px;
  text-align: center;
  vertical-align: middle;
  @media (min-width: 500px) {
    display: none;
  }
`;

const FlexContainer = styled.div`
  height: 58px;
  width: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Logout = styled.div`
  font-size: 25px;
  transition: 0.5s ease-out;
  color: ${props => props.$dark ? 'white' : 'black'};
  width: 250px;
  padding: 0px 25px;
  margin: 7px;
  &:hover {
    color: ${props => props.$dark ? 'black' : 'white'};
    text-shadow: white ${props => props.$dark && '0px 0px 10px, black'} 0px 0px 5px;
    transition: 0.3s;
  }
  cursor: pointer;
  margin-top: auto;
  margin-bottom: 35px;
`;

function SideMenu() {
  const { appearanceCtx, AppearanceFns } = useAppearance();
  const { darkMode, sideMenu } = appearanceCtx;

  const { accountCtx, AccountFns } = useAccount();
  const { authenticated } = accountCtx;

  const hide = useCallback(() => {
    AppearanceFns.hideMenu();
  }, [AppearanceFns]);

  const burger = useRef(null);
  useEffect(() => {
    const handleBlur = (e) => {
      if (!burger.current.contains(e.target)) {
        hide();
      }
    }

    if (sideMenu) {
      document.addEventListener('click', handleBlur);
    } else {
      document.removeEventListener('click', handleBlur);
    }

    return () => {
      document.removeEventListener('click', handleBlur);
    }
  }, [sideMenu, hide]);

  const logout = () => {
    AccountFns.logout();
  }

  return (
    <SideBar dark={darkMode} show={sideMenu} ref={burger}>

      <FlexContainer>
        <NavAvatar>
          <Avatar />
        </NavAvatar>

        <NavToggle>
          <Toggle />
        </NavToggle>

        <CloseBtn onClick={hide} $dark={darkMode} >&times;</CloseBtn>
      </FlexContainer>

      <NavLink onClick={hide} to='/' $dark={darkMode} replace >Home</NavLink>

      {authenticated && <NavLink onClick={hide} to='/favorites' $dark={darkMode} replace >Favorites</NavLink>}

      {authenticated && <Logout onClick={logout} $dark={darkMode} >Logout</Logout>}
    </SideBar>
  );
}

export default SideMenu;
