import { render, cleanup, screen } from '@testing-library/react';
import VideoCard from '../';
import { result } from '../../../mock/youtube-videos-mock';
const video = result.data.items[1]; // Using sample video
import AppearanceProvider from '../../../providers/Appearance';
import AccountProvider from '../../../providers/Account';
import React from 'react';

import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';

const history = createMemoryHistory();
afterEach(cleanup);
const renderer = (dark) => render(
  <Router history={history}>
    <AppearanceProvider>
      <AccountProvider>
        <VideoCard video={video} test={dark || false} />
      </AccountProvider>
    </AppearanceProvider>
  </Router>
);

describe('video card', () => {
  test('card renders', () => {
    renderer();
    const videoCard = screen.getByTestId('video-card');
    expect(videoCard).toBeInTheDocument();
  });

  test('thumbnail renders', () => {
    renderer();
    const thumbnail = screen.getByAltText('thumbnail');
    expect(thumbnail).toBeInTheDocument();
  });

  test('title renders', () => {
    renderer();
    const title = screen.getByTitle('title');
    expect(title).toBeInTheDocument();
  });

  test('description renders', () => {
    renderer();
    const description = screen.getByTitle('description');
    expect(description).toBeInTheDocument();
  });

  test('card renders light mode', () => {
    renderer();
    const videoCard = screen.getByTestId('video-card');
    const cardStyle = window.getComputedStyle(videoCard);
    expect(cardStyle.backgroundColor).toBe("white");
    expect(cardStyle.boxShadow).toBe("1px 2px 2px rgba(100,100,100,0.7)");
  });

  test('card renders dark mode', () => {
    renderer(true);
    const videoCard = screen.getByTestId('video-card');
    const cardStyle = window.getComputedStyle(videoCard);
    expect(cardStyle.backgroundColor).toBe("rgb(51, 51, 51)");
    expect(cardStyle.boxShadow).toBe("1px 2px 2px rgba(7,7,7,0.7)");
  });

});
