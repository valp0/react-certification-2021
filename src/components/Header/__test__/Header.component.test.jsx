import { render, cleanup, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import Header from '../';
import React from 'react';
import StateProvider from '../../../providers/State';

const history = createMemoryHistory();
afterEach(cleanup);
beforeEach(() => render(
  <StateProvider>
    <Router history={history}>
      <Header />
    </Router>
  </StateProvider>
));

describe('header', () => {
  test('header renders', () => {
    const header = screen.getAllByRole('navigation');
    expect(header).toHaveLength(2);
  });

  test('header elements render', () => {
    const navButton = screen.getByRole('button');
    const searchBox = screen.getByRole('textbox');
    const toggle = screen.getAllByRole('checkbox');
    const avatar = screen.getAllByAltText('Avatar');

    expect(navButton).toBeInTheDocument();
    expect(searchBox).toBeInTheDocument();
    expect(toggle).toHaveLength(2);
    expect(avatar).toHaveLength(2);
  });
});
