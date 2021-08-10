import { render, cleanup, screen, waitFor } from '@testing-library/react';
import RelatedList from '../';
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
    <RelatedList id={'bkX4bBVe9R8'} />
  </Router>)
);

describe('related list', () => {
  test('spinner renders', () => {
    const loading = screen.getByTestId('loading-related');
    expect(loading).toBeInTheDocument();
  });

  test('list renders', async () => {
    const list = await waitFor(() => screen.findByTitle('related-list'));
    expect(list).toBeInTheDocument();
  });

});
