import { render, cleanup, screen } from '@testing-library/react';
import NavButton from '../';
import React from 'react';
import StateProvider from '../../../providers/State';

import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';

const history = createMemoryHistory();

afterEach(cleanup);
beforeEach(() => render(
  <Router history={history}>
    <StateProvider>
      <NavButton />
    </StateProvider>
  </Router>
));

describe('nav button', () => {
  test('nav button renders', () => {
    const navButton = screen.getByRole('button');
    expect(navButton).toBeInTheDocument();
  });
});
