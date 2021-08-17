import { render, cleanup, screen } from '@testing-library/react';
import Layout from '../';
import React from 'react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import StateProvider from '../../../providers/State';

const history = createMemoryHistory();
afterEach(cleanup);
beforeEach(() => render(
  <Router history={history}>
    <StateProvider>
      <Layout>
        Children
      </Layout>
    </StateProvider>
  </Router>
));

describe('side menu', () => {
  test('layout renders', () => {
    const layout = screen.getByRole('main');
    expect(layout).toBeInTheDocument();
  });

  test('children render', () => {
    const children = screen.getByText('Children');
    expect(children).toBeInTheDocument();
  });
});
