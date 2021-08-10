import { render, cleanup, screen } from '@testing-library/react';
import Home from '../';
import React from 'react';

import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';

const history = createMemoryHistory();
afterEach(cleanup);
beforeEach(() => render(
  <Router history={history}>
    <Home query={'wizeline'} />
  </Router>
));

describe('home page', () => {
  test('welcome text renders', () => {
    const title = screen.queryByText('Welcome to the Challenge!');
    expect(title).toBeInTheDocument();
  });

  test('video list renders', () => {
    const videoList = screen.queryByTestId('video-list');
    expect(videoList).toBeInTheDocument();
  });

  test.todo('should change background with dark mode');
});
