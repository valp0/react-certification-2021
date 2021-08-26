import { render, cleanup, screen } from '@testing-library/react';
import Layout from '../';
import React from 'react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import AppearanceProvider from '../../../providers/Appearance';
import AccountProvider from '../../../providers/Account';

const history = createMemoryHistory();
afterEach(cleanup);
beforeEach(() => {
  const domNode = document.createElement('div');
  domNode.setAttribute('id', 'domNode');
  document.body.appendChild(domNode);
  render(
    <Router history={history}>
      <AppearanceProvider>
        <AccountProvider>
          <Layout>
            Children
          </Layout>
        </AccountProvider>
      </AppearanceProvider>
    </Router>
  )
}
);

describe('layout', () => {
  test('layout renders', () => {
    const layout = screen.getByRole('main');
    expect(layout).toBeInTheDocument();
  });

  test('children render', () => {
    const children = screen.getByText('Children');
    expect(children).toBeInTheDocument();
  });
});
