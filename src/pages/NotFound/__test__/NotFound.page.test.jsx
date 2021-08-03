import { render, cleanup, screen } from '@testing-library/react';
import NotFound from '../';
import React from 'react';

import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';

const history = createMemoryHistory();
afterEach(cleanup);
beforeEach(() => render(
  <Router history={history}>
    <NotFound />
  </Router>
));

describe('not found page', () => {
  test('not found page renders', () => {
    const whoops = screen.queryByText('Whoops! It seems this page does not exist!');
    expect(whoops).toBeInTheDocument();
  });

  test.todo('should change background with dark mode');
});
