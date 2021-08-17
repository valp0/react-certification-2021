import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { StateContext } from '../../providers/State';

function Private({ children, test, ...rest }) {
  const [state] = useContext(StateContext);
  let { loggedIn: authenticated } = state;
  if (test) authenticated = true;

  return (
    <Route {...rest} render={() => (authenticated ? children : <Redirect to="/" />)} />
  );
}

export default Private;
