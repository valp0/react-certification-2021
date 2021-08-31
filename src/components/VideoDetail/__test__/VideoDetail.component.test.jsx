import { render, cleanup, screen, waitFor } from '@testing-library/react';
import VideoDetail from '../';
import React from 'react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import { detail } from '../../../mock/youtube-detail-mock';
import AppearanceProvider from '../../../providers/Appearance';
import AccountProvider from '../../../providers/Account';


// Importing and mocking axios
import axios from 'axios';
import { storage } from '../../../utils/fns';
jest.mock('axios');

// Mocking axios response
axios.get.mockResolvedValue(detail);

const history = createMemoryHistory();
afterEach(cleanup);
const renderer = (dark) => render(
  <Router history={history}>
    <AppearanceProvider>
      <AccountProvider>
        <VideoDetail id={'bkX4bBVe9R8'} test={dark || false} />
      </AccountProvider>
    </AppearanceProvider>
  </Router>
);

describe('video details', () => {
  test('spinner renders', async () => {
    renderer();

    const loading = screen.getByTestId('loading-videos');
    expect(loading).toBeInTheDocument();

    await waitFor(() => {
      expect(loading).not.toBeInTheDocument();
    });
  });

  test('details render', async () => {
    renderer();

    const details = await screen.findByTitle('video-details');
    expect(details).toBeInTheDocument();

    const iframe = await screen.findByTitle('YouTube video player');
    expect(iframe).toBeInTheDocument();

    const title = await screen.findByTitle('video-title');
    expect(title).toBeInTheDocument();

    const description = await screen.findByTitle('video-description');
    expect(description).toBeInTheDocument();
  });

  test('details render light mode', async () => {
    renderer();

    const details = await screen.findByTitle('video-details');
    const style = window.getComputedStyle(details);

    expect(style.backgroundColor).toBe("white");
    expect(style.boxShadow).toBe("0px 2px 7px 2px rgba(100,100,100,0.7)");
  });

  test('details render dark mode', async () => {
    renderer(true);

    const details = await screen.findByTitle('video-details');
    const style = window.getComputedStyle(details);

    expect(style.backgroundColor).toBe("rgb(51, 51, 51)");
    expect(style.boxShadow).toBe("0px 2px 7px 2px rgba(7,7,7,0.7)");
  });

  test('video details are not shown', async () => {
    storage.remove("cache");
    axios.get.mockResolvedValue({ data: { items: [] } });
    renderer(true);

    const loading = screen.getByTestId('loading-videos');
    expect(loading).toBeInTheDocument();

    await waitFor(() => {
      expect(loading).not.toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Redirected to 404')).toBeInTheDocument();
    });
  });

});
