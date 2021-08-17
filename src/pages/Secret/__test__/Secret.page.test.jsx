import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import SecretPage from '../';

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
const history = createMemoryHistory();

afterEach(cleanup);
beforeEach(() => render(
  <Router history={history}>
    <SecretPage />
  </Router>
));

describe('secret page', () => {
  test('text renders', () => {
    const welcome = screen.getByText('welcome, voyager...');
    expect(welcome).toBeInTheDocument();
  });

  test('rick roll renders', () => {
    const rickRoll = screen.getByTitle('rick roll');
    expect(rickRoll).toBeInTheDocument();
  });

  test.todo('should display favorite videos');
});
