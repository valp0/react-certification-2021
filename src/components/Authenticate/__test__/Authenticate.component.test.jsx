import { render, cleanup, screen } from '@testing-library/react';
import Authenticate from '../';
import React from 'react';
import AppearanceProvider from '../../../providers/Appearance';
import AccountProvider from '../../../providers/Account';

afterEach(cleanup);
beforeEach(() => {
  const domNode = document.createElement('div');
  domNode.setAttribute('id', 'domNode');
  document.body.appendChild(domNode);
  render(
    <AppearanceProvider>
      <AccountProvider>
        <Authenticate />
      </AccountProvider>
    </AppearanceProvider>
  )
});

describe('auth modal', () => {
  test('modal renders', () => {
    const username = screen.getByText('Username');
    expect(username).toBeInTheDocument();
    const password = screen.getByText('Password');
    expect(password).toBeInTheDocument();
    const submit = screen.getByTitle("submit");
    expect(submit).toBeInTheDocument();
    const close = screen.getByTitle("close");
    expect(close).toBeInTheDocument();
  });

});
