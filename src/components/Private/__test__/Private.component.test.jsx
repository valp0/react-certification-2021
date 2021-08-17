import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Private from '../';
import StateProvider from '../../../providers/State';

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
const history = createMemoryHistory();

afterEach(cleanup);

describe('private', () => {
  test('can see children', () => {
    render(
      <Router history={history}>
        <StateProvider>
          <Private test>
            Children
          </Private>
        </StateProvider>
      </Router>
    );
    const children = screen.getByText('Children');
    expect(children).toBeInTheDocument();
  });

  test('can see children', () => {
    render(
      <Router history={history}>
        <StateProvider>
          <Private>
            Children
          </Private>
        </StateProvider>
      </Router>
    );
    const children = screen.queryByText('Children');
    expect(children).toBeNull();
  });
});
