import { render, cleanup, screen } from '@testing-library/react';
import VideoList from '../';
import React from 'react';
import { result } from '../../../mock/youtube-videos-mock';
const videos = result.data.items.slice(1);

import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import StateProvider from '../../../providers/State';

const history = createMemoryHistory();
afterEach(cleanup);
beforeEach(() => render(
  <Router history={history}>
    <StateProvider>
      <VideoList videos={videos} />
    </StateProvider>
  </Router>
));

describe('video list', () => {
  test('video list renders', () => {
    const videoList = screen.getByTestId('video-list');
    expect(videoList).toBeInTheDocument();
  });

  test.todo('should change background with dark mode');
});
