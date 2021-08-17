import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import Avatar from '../';
import React from 'react';
import StateProvider from '../../../providers/State';
import { storage } from '../../../utils/fns';

afterEach(cleanup);
beforeEach(() => render(
  <StateProvider>
    <Avatar />
  </StateProvider>
));

describe('avatar', () => {
  test('avatar renders', () => {
    const avatar = screen.getByAltText('Avatar');
    expect(avatar).toBeInTheDocument();
  });

  test('click toggles login', () => {
    const avatar = screen.getByAltText('Avatar');
    expect(storage.get('context').loggedIn).toBe(false);
    fireEvent.click(avatar);
    expect(storage.get('context').loggedIn).toBe(true);
    fireEvent.click(avatar);
    expect(storage.get('context').loggedIn).toBe(false);
  });

});
