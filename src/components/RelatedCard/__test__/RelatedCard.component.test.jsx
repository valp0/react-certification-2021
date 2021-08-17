import { render, cleanup, screen } from '@testing-library/react';
import RelatedCard from '../';
import React from 'react';
import StateProvider from '../../../providers/State';

import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';

const history = createMemoryHistory();
afterEach(cleanup);
beforeEach(() => render(
  <Router history={history}>
    <StateProvider>
      <RelatedCard id={'bkX4bBVe9R8'} img={'https://i.ytimg.com/vi/bkX4bBVe9R8/mqdefault.jpg'} title={'Acing the Wizeline Technical Assessment'} />
    </StateProvider>
  </Router>
));

describe('related card', () => {
  test('card renders', () => {
    const card = screen.getByTestId('video-card');
    expect(card).toBeInTheDocument();
  });

  test('has link', () => {
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/watch/bkX4bBVe9R8');
  });

  test('has image', () => {
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });

  test('has title', () => {
    const title = screen.getByTitle('title');
    expect(title).toBeInTheDocument();
  });

});
