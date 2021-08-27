import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import Header from '../';
import React from 'react';
import AppearanceProvider from '../../../providers/Appearance';
import AccountProvider from '../../../providers/Account';
import SearchProvider from '../../../providers/Search';

const history = createMemoryHistory();
afterEach(cleanup);
beforeEach(() => render(
  <AppearanceProvider>
    <AccountProvider>
      <SearchProvider>
        <Router history={history}>
          <Header />
        </Router>
      </SearchProvider>
    </AccountProvider>
  </AppearanceProvider>
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

  test('dark mode', () => {
    const buttonBar = screen.getByTestId('button-bar');
    expect(buttonBar).toBeInTheDocument();

    let barStyle = window.getComputedStyle(buttonBar);
    expect(barStyle.backgroundColor).toBe("black")
    const toggle = screen.queryAllByRole('checkbox')[1];
    fireEvent.click(toggle);
    barStyle = window.getComputedStyle(buttonBar);
    expect(barStyle.backgroundColor).toBe("white");
  });
});
