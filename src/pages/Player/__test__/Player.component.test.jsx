import { render, cleanup, screen, waitFor } from '@testing-library/react';
import Player from '../';
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
    <Player testId={'bkX4bBVe9R8'} />
  </Router>
));

describe('player page', () => {
  test('home button renders', () => {
    const home = screen.getByRole('link');
    expect(home).toBeInTheDocument();
  });

  test('video details render', async () => {
    const details = await waitFor(() => screen.findByTitle('video-details'));
    expect(details).toBeInTheDocument();
  });

  test('related videos render', async () => {
    const related = await waitFor(() => screen.findByTitle('related-list'));
    expect(related).toBeInTheDocument();
  });

});
