import { render, cleanup, screen } from '@testing-library/react';
import Player from '../';
import React from 'react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import AppearanceProvider from '../../../providers/Appearance';
import AccountProvider from '../../../providers/Account';
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
    <AppearanceProvider>
      <AccountProvider>
        <Player testId={'bkX4bBVe9R8'} />
      </AccountProvider>
    </AppearanceProvider>
  </Router>
));

describe('player page', () => {
  test('video details render', async () => {
    const details = await screen.findByTitle('video-details');
    expect(details).toBeInTheDocument();
  });

  test('related videos render', async () => {
    const related = await screen.findByTitle('related-list');
    expect(related).toBeInTheDocument();
  });

});
