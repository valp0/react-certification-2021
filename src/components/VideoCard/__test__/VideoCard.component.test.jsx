import { render, cleanup, screen } from '@testing-library/react';
import VideoCard from '../';
import { result } from '../../../mock/youtube-videos-mock';
const video = result.data.items[1]; // Using sample video
import React from 'react';

import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';

const history = createMemoryHistory();
afterEach(cleanup);
beforeEach(() => render(
  <Router history={history}>
    <VideoCard video={video} />
  </Router>
));

describe('video card', () => {
  test('card renders', () => {
    const videoCard = screen.getByTestId('video-card');
    expect(videoCard).toBeInTheDocument();
  });

  test('thumbnail renders', () => {
    const thumbnail = screen.getByAltText('thumbnail');
    expect(thumbnail).toBeInTheDocument();
  });

  test('title renders', () => {
    const title = screen.getByTitle('title');
    expect(title).toBeInTheDocument();
  });

  test('description renders', () => {
    const description = screen.getByTitle('description');
    expect(description).toBeInTheDocument();
  });

  test.todo('should change background with dark mode');
});
