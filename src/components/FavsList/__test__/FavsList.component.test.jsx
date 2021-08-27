import { render, cleanup, screen } from '@testing-library/react';
import FavsList from '../';
import React from 'react';

import AppearanceProvider from '../../../providers/Appearance';
import AccountProvider from '../../../providers/Account';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history'

const history = createMemoryHistory();
afterEach(cleanup);
beforeEach(() => render(
  <Router history={history}>
    <AppearanceProvider>
      <AccountProvider>
        <FavsList />
      </AccountProvider>
    </AppearanceProvider>
  </Router>
));

describe('favs list', () => {
  test('favs list renders', async () => {
    const list = screen.getByTitle("favs-list");
    expect(list).toBeInTheDocument();
  });

});
