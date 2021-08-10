import { render, cleanup, screen, waitFor } from '@testing-library/react';
import VideoDetail from '../';
import React from 'react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
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
    <VideoDetail id={'bkX4bBVe9R8'} />
  </Router>
));

describe('video details', () => {
  test('spinner renders', () => {
    const loading = screen.getByTestId('loading-videos');
    expect(loading).toBeInTheDocument();
  });

  test('details render', async () => {
    const details = await waitFor(() => screen.findByTitle('video-details'));
    expect(details).toBeInTheDocument();
  });

});
