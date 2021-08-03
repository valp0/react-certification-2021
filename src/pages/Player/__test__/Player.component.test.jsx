import { render, cleanup, screen } from '@testing-library/react';
import Player from '../';
import React from 'react';

import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';

const history = createMemoryHistory();
afterEach(cleanup);
beforeEach(() => render(
  <Router history={history}>
    <Player />
  </Router>
));

describe('player page', () => {
  test('home button renders', () => {
    const home = screen.queryByRole('link');
    expect(home).toBeInTheDocument();
  });

});
