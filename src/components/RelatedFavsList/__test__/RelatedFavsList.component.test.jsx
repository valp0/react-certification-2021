import { render, cleanup, screen } from '@testing-library/react';
import RelatedFavsList from '../';
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
        <RelatedFavsList />
      </AccountProvider>
    </AppearanceProvider>
  </Router>
));

describe('related favs list', () => {
  test('related favs list renders', async () => {
    const list = screen.getByTitle("related-list");
    expect(list).toBeInTheDocument();
  });

});
