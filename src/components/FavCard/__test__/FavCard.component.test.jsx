import { render, cleanup, screen } from '@testing-library/react';
import FavCard from '../';
import React from 'react';
import { detail } from '../../../mock/youtube-detail-mock';

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
        <FavCard video={detail} />
      </AccountProvider>
    </AppearanceProvider>
  </Router>
));

describe('fav card', () => {
  test('fav card renders', async () => {
    const card = screen.getByTitle("fav-card");
    expect(card).toBeInTheDocument();
  });

});
