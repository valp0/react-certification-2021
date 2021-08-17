import { render, cleanup, screen, waitFor } from '@testing-library/react';
import RelatedList from '../';
import React from 'react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import { result } from '../../../mock/youtube-videos-mock';
import StateProvider from '../../../providers/State';


// Importing and mocking axios
import axios from 'axios';
jest.mock('axios');

// Mocking axios response
axios.get.mockResolvedValue(result);

const history = createMemoryHistory();
afterEach(cleanup);
const renderer = () => render(
  <Router history={history}>
    <StateProvider>
      <RelatedList id={'bkX4bBVe9R8'} />
    </StateProvider>
  </Router>
);

describe('related list', () => {
  test('spinner renders', async () => {
    renderer();
    const loading = screen.getByTestId('loading-related');
    expect(loading).toBeInTheDocument();

    await waitFor(() => {
      expect(loading).not.toBeInTheDocument();
    });
  });

  test('list renders', async () => {
    renderer();
    const loading = screen.getByTestId('loading-related');
    await waitFor(() => {
      expect(loading).not.toBeInTheDocument();
    });

    const list = await screen.findByTitle('related-list');
    expect(list).toBeInTheDocument();
  });

});
