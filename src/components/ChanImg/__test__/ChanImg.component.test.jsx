import { render, cleanup, screen, waitFor } from '@testing-library/react';
import ChanImg from '../';
import React from 'react';
import { channel } from '../../../mock/youtube-channel-mock';


// Importing and mocking axios
import axios from 'axios';
jest.mock('axios');

// Mocking axios response
axios.get.mockResolvedValue(channel);

afterEach(cleanup);
beforeEach(() => render(<ChanImg />));

describe('channel image', () => {
  test('channel image renders', async () => {
    const loading = screen.getByTestId("loading-chanImg");
    expect(loading).toBeInTheDocument();
    await waitFor(() => {
      expect(loading).not.toBeInTheDocument();
    });
    const channelImg = screen.getByAltText('channel');
    expect(channelImg).toBeInTheDocument();
  });
});
