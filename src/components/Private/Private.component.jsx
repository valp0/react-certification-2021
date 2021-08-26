import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAccount } from '../../providers/Account';

function Private({ children, test, ...rest }) {
  const [state] = useAccount();
  let { authenticated } = state;
  if (test) authenticated = true;

  return (
    <Route {...rest} render={() => (authenticated ? children : <Redirect to="/" />)} />
  );
}

export default Private;
