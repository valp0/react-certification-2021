import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Private from '../';
import AppearanceProvider from '../../../providers/Appearance';
import AccountProvider from '../../../providers/Account';

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
const history = createMemoryHistory();

afterEach(cleanup);

describe('private', () => {
  test('can see children', () => {
    render(
      <Router history={history}>
        <AppearanceProvider>
          <AccountProvider>
            <Private test>
              Children
            </Private>
          </AccountProvider>
        </AppearanceProvider>
      </Router>
    );
    const children = screen.getByText('Children');
    expect(children).toBeInTheDocument();
  });

  test('can\'t see children', () => {
    render(
      <Router history={history}>
        <AppearanceProvider>
          <AccountProvider>
            <Private>
              Children
            </Private>
          </AccountProvider>
        </AppearanceProvider>
      </Router>
    );
    const children = screen.queryByText('Children');
    expect(children).toBeNull();
  });
});
