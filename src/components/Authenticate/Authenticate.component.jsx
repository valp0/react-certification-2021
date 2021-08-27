import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useAccount } from '../../providers/Account';
import { types } from '../../utils/constants';
import { useAppearance } from "../../providers/Appearance";
import { loginApi } from '../../utils/fns';

const HideView = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(7, 7, 7, 0.7);
  z-index: 21;
  display: flex;
  overflow: hidden;
  opacity: ${props => props.loginModal ? "1" : "0"};
  visibility: ${props => props.loginModal ? "visible" : "hidden"};
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
`;

const FormWrapper = styled.div`
  background-color: ${props => props.dark ? 'rgb(140, 35, 21)' : 'rgb(240, 240, 240)'};
  color: ${props => props.dark ? 'white' : 'black'};
  box-shadow: 2px 2px 4px ${props => props.dark ? 'rgba(70, 18, 11, 0.7)' : 'rgba(100, 100, 100, 0.7)'};
  font-size: 14pt;
  margin: auto;
  height: 270px;
  width: 340px;
  padding: 0px 20px;
  border: 3px outset ${props => props.dark ? 'rgb(160, 40, 24)' : 'white'};
  border-radius: 7px;
  visibility: ${props => props.loginModal ? "visible" : "hidden"};
  transition: 0s;
`;

const Button = styled.button`
  font-size: 12pt;
  width: 76px;
  padding: 5px 10px;
  border: 3px solid transparent;
  border-radius: 5px;
  background-color: rgba(0,0,0,0.1);
  cursor: pointer;
  transition: 0.2s ease-out;
  color: inherit;
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 0px 15px ${props => props.dark ? 'rgba(255, 255, 255, 1)' : 'rgba(100, 100, 100, 0.7)'};
  }
  &:active {
    background-color: rgba(77, 77, 77, 0.3);
    border-style: inset;
    border-color: rgba(37, 37, 37, 0.27);
  }
  &:disabled{
    background-color: rgba(7,7,7,0.27);
    box-shadow: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ErrorMsg = styled.div`
  font-size: 10pt;
  color: red;
  text-align: center;
  margin: 5px;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  font-size: 17pt;
  background-color: rgb(227,227,227);
  opacity: 87%;
  border: none;
  border-radius: 7px;
  transition: 0.7s;
  padding: 0 9px;
  &:focus {
    outline: none;
    background-color: white;
    opacity: 100%;
    transition: 0.7s;
  }
  &:hover {
    outline: none;
    opacity: 1;
    background-color: white;
    transition: 0.7s;
  }
  &:disabled{
    background-color: rgba(7,7,7,0.27);
    box-shadow: none;
  }
`;

const Title = styled.h2`
    margin: 7px;
    text-align: center;
`;

function Authenticate() {
  const [account, accDispatch] = useAccount();
  let { modal, loginFailed, authenticated } = account;
  const [loading, setLoading] = useState(false);

  const [appearance] = useAppearance();
  let { darkMode } = appearance;

  const closeModal = useCallback(() => {
    accDispatch({ type: types.CLOSE_MODAL });
    accDispatch({ type: types.LOGIN_SUCCESS });
  }, [accDispatch]);

  const authenticate = useCallback(async (event) => {
    event.preventDefault();
    const rUsername = event.target.elements.rUsername.value;
    const rPassword = event.target.elements.rPassword.value;
    setLoading(true);
    try {
      let { avatar, name, user } = await loginApi(rUsername, rPassword);
      accDispatch({ type: types.USER_LOGIN });
      accDispatch({ type: types.USER_SETAVATAR, avatar: avatar });
      accDispatch({ type: types.USER_SETNAME, name: name, user: user });
      closeModal();
    } catch {
      accDispatch({ type: types.LOGIN_FAILED });
    }
    setLoading(false);
  }, [accDispatch, closeModal]);

  const loginForm = useRef(null);
  useEffect(() => {
    const ESCAPE_KEY = 27;

    const handleBlur = (e) => {
      if (!loginForm.current.contains(e.target)) {
        closeModal();
      }
    }

    const handleEscape = (e) => {
      if (e.keyCode === ESCAPE_KEY) {
        closeModal();
      }
    }

    if (modal) {
      document.addEventListener('click', handleBlur);
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('click', handleBlur);
      document.removeEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('click', handleBlur);
      document.removeEventListener('keydown', handleEscape);
    }
  }, [modal, closeModal]);

  const logout = () => {
    accDispatch({ type: types.USER_LOGOUT });
    accDispatch({ type: types.USER_UNSETAVATAR });
    accDispatch({ type: types.USER_UNSETNAME });
    // closeModal();
  }

  return ReactDOM.createPortal(!authenticated ?
    <HideView loginModal={modal} >
      <FormWrapper dark={darkMode} ref={loginForm} loginModal={modal}>
        <Title >Login</Title>

        <form onSubmit={authenticate}>
          <div>
            <label htmlFor="rUsername">
              <strong>Username </strong>

              <Input required type="text" name="rUsername" placeholder="username" disabled={loading} />
            </label>
          </div>

          <div>
            <label htmlFor="rPassword">
              <strong>Password </strong>

              <Input required type="password" name="rPassword" placeholder="password" disabled={loading} />
            </label>
          </div>

          {loading ? <div className="spinner-v2" /> :
            <ErrorMsg>{loginFailed ? "Wrong username or password!" : <br></br>}</ErrorMsg>}

          <Buttons>
            <Button dark={darkMode} onClick={closeModal} type="button" disabled={loading} title="close" >Close</Button>

            <Button dark={darkMode} type="submit" disabled={loading} title="submit" >Submit</Button>
          </Buttons>
        </form>
      </FormWrapper>
    </HideView> :
    <HideView loginModal={modal} >
      <FormWrapper dark={darkMode} ref={loginForm} loginModal={modal} style={{ height: "130px" }}>
        <Title >Logout?</Title>

        <Buttons>
          <Button dark={darkMode} onClick={logout} type="button">Yes</Button>

          <Button dark={darkMode} onClick={closeModal} type="button">No</Button>
        </Buttons>
      </FormWrapper>
    </HideView>,
    document.getElementById('domNode')
  );
}

export default Authenticate;
