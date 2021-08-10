import { render, cleanup, screen, waitFor } from '@testing-library/react';
import Home from '../';
import React from 'react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import { result } from '../../../mock/youtube-videos-mock';

// Importing and mocking axios
import axios from 'axios';
jest.mock('axios');

// Mocking axios response
axios.get.mockResolvedValue(result);

const history = createMemoryHistory();
afterEach(cleanup);
beforeEach(() => render(
  <Router history={history}>
    <Home query={'wizeline'} />
  </Router>
));

describe('home page', () => {
  test('welcome text renders', () => {
    const title = screen.getByText('Welcome to the Challenge!');
    expect(title).toBeInTheDocument();
  });

  test('spinner renders', () => {
    const loading = screen.getByTestId('spinner');
    expect(loading).toBeInTheDocument();
  });

  test('video list renders', async () => {
    const list = await waitFor(() => screen.findByTestId('video-list'));
    expect(list).toBeInTheDocument();
  });

  test.todo('should change background with dark mode');
});
