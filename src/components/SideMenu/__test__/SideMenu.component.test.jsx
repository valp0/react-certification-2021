import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import SideMenu from '../';
import React from 'react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import AppearanceProvider from '../../../providers/Appearance';
import AccountProvider from '../../../providers/Account';
import { storage } from '../../../utils/fns';

const hide = jest.fn();
const menu = true;
const history = createMemoryHistory();
afterEach(cleanup);
beforeEach(() => render(
  <Router history={history}>
    <AppearanceProvider>
      <AccountProvider>
        <SideMenu hide={hide} menu={menu} />
      </AccountProvider>
    </AppearanceProvider>
  </Router>
));

describe('side menu', () => {
  test('side menu renders', () => {
    const burger = screen.getByRole('navigation');
    expect(burger).toBeInTheDocument();
  });

  test('avatar renders', () => {
    const avatar = screen.getByAltText('Avatar');
    expect(avatar).toBeInTheDocument();
  });

  test('dark mode toggle switch renders', async () => {
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toBeInTheDocument();
  });

  test('close button renders ', () => {
    const close = screen.getByText('×');
    expect(close).toBeInTheDocument();
  });

  test('close button works', () => {
    const close = screen.getByText('×');
    fireEvent.click(close);
    expect(storage.get('appearance').sideMenu).toBe(false);
  });

  test('home link renders', () => {
    const home = screen.getByRole('link', { name: 'Home' });
    expect(home).toBeInTheDocument();
  });

  test('dark mode switch toggles dark mode', () => {
    const burger = screen.getByRole('navigation');
    expect(burger).toBeInTheDocument();
    let burgerStyle = window.getComputedStyle(burger);
    expect(burgerStyle.backgroundColor).toBe("rgb(238, 59, 27)")
    const toggle = screen.getByRole('checkbox');
    fireEvent.click(toggle);
    burgerStyle = window.getComputedStyle(burger);
    expect(burgerStyle.backgroundColor).toBe("rgb(140, 35, 21)");
  });

});
