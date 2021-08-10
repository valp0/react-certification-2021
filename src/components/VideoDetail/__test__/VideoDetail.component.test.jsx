import { render, cleanup } from '@testing-library/react';
import VideoDetails from '../';
import React from 'react';

import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';

const history = createMemoryHistory();
afterEach(cleanup);

describe('video details', () => {
  test('details render', () => {
    const { getAllByTestId } = render(
      <Router history={history}>
        <VideoDetails id={'nmXMgqjQzls'} />
      </Router>
    );
    expect(getAllByTestId('loading-videos')).toBeDefined();
  });

});
