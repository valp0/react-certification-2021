import { render, cleanup, screen, waitFor } from '@testing-library/react';
import Home from '../';
import React from 'react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import { result } from '../../../mock/youtube-videos-mock';
import AppearanceProvider from '../../../providers/Appearance';
import AccountProvider from '../../../providers/Account';
import SearchProvider from '../../../providers/Search';

// Importing and mocking axios
import axios from 'axios';
jest.mock('axios');

// Mocking axios response
axios.get.mockResolvedValue(result);

const history = createMemoryHistory();
afterEach(cleanup);
beforeEach(() => render(
  <Router history={history}>
    <AppearanceProvider>
      <AccountProvider>
        <SearchProvider>
          <Home query={'wizeline'} />
        </SearchProvider>
      </AccountProvider>
    </AppearanceProvider>
  </Router>
));

describe('home page', () => {
  test('welcome text renders', () => {
    const title = screen.getByText('Welcome to the Challenge!');
    expect(title).toBeInTheDocument();
  });

  test('spinner renders', async () => {
    const loading = screen.getByTestId('spinner');
    expect(loading).toBeInTheDocument();

    await waitFor(() => {
      expect(loading).not.toBeInTheDocument();
    });
  });

  test('video list renders', async () => {
    const loading = screen.getByTestId('spinner');
    await waitFor(() => {
      expect(loading).not.toBeInTheDocument();
    });

    const list = await screen.findByTestId('video-list');
    expect(list).toBeInTheDocument();
  });

});
