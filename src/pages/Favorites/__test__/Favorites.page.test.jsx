import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Favorites from '../';

import AppearanceProvider from '../../../providers/Appearance';
import AccountProvider from '../../../providers/Account';
import { MockAccProvider, MockAccProvider2 } from '../../../providers/Account/Account.provider';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
const history = createMemoryHistory();

afterEach(cleanup);

describe('secret page', () => {
  test('welcome text renders', () => {
    render(
      <Router history={history}>
        <AppearanceProvider>
          <AccountProvider>
            <Favorites />
          </AccountProvider>
        </AppearanceProvider>
      </Router>
    );
    const welcome = screen.getByText(/Welcome back/i);
    expect(welcome).toBeInTheDocument();
  });

  test('favorites render', () => {
    render(
      <Router history={history}>
        <AppearanceProvider>
          <MockAccProvider>
            <Favorites />
          </MockAccProvider>
        </AppearanceProvider>
      </Router>
    );
    const card = screen.getByTitle("fav-card");
    expect(card).toBeInTheDocument();
  });

  test('no favs text renders', () => {
    render(
      <Router history={history}>
        <AppearanceProvider>
          <MockAccProvider2>
            <Favorites />
          </MockAccProvider2>
        </AppearanceProvider>
      </Router>
    );
    const noFavs = screen.getByText("You have no favorite videos yet!");
    expect(noFavs).toBeInTheDocument();
  });

});
