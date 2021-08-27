import { render, cleanup, screen } from '@testing-library/react';
import FavPlayer from '../';
import React from 'react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import AppearanceProvider from '../../../providers/Appearance';
import { MockAccProvider } from '../../../providers/Account/Account.provider';
import { detail } from '../../../mock/youtube-detail-mock';

// Importing and mocking axios
import axios from 'axios';
jest.mock('axios');

// Mocking axios response
axios.get.mockResolvedValue(detail);

const history = createMemoryHistory();
afterEach(cleanup);
beforeEach(() => render(
  <Router history={history}>
    <AppearanceProvider>
      <MockAccProvider>
        <FavPlayer id={'bkX4bBVe9R8'} />
      </MockAccProvider>
    </AppearanceProvider>
  </Router>
));

describe('fav player page', () => {
  test('video details render', async () => {
    const details = await screen.findByTitle('video-details');
    expect(details).toBeInTheDocument();
  });

  test('related videos render', async () => {
    const related = await screen.findByTitle('related-list');
    expect(related).toBeInTheDocument();
  });

});
