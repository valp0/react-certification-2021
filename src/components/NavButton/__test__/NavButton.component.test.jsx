import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import NavButton from '../';
import React from 'react';
import AppearanceProvider from '../../../providers/Appearance';
import AccountProvider from '../../../providers/Account';

import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import { storage } from '../../../utils/fns';

const history = createMemoryHistory();

afterEach(cleanup);
beforeEach(() => render(
  <Router history={history}>
    <AppearanceProvider>
      <AccountProvider>
        <NavButton />
      </AccountProvider>
    </AppearanceProvider>
  </Router>
));

describe('nav button', () => {
  test('nav button renders', () => {
    const navButton = screen.getByRole('button');
    expect(navButton).toBeInTheDocument();
  });

  test('click on nav button renders side menu', () => {
    const navButton = screen.getByRole('button');
    expect(storage.get("appearance").sideMenu).toBe(false);
    expect(storage.get("appearance").hideContent).toBe(false);
    fireEvent.click(navButton);
    expect(storage.get("appearance").sideMenu).toBe(true);
    expect(storage.get("appearance").hideContent).toBe(true);
  });
});
