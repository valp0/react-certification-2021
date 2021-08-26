import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import Avatar from '../';
import React from 'react';
import AccountProvider from '../../../providers/Account';
import { storage } from '../../../utils/fns';

afterEach(cleanup);
beforeEach(() => render(
  <AccountProvider>
    <Avatar />
  </AccountProvider>
));

describe('avatar', () => {
  test('avatar renders', () => {
    const avatar = screen.getByAltText('Avatar');
    expect(avatar).toBeInTheDocument();
  });

  test('click toggles login', () => {
    const avatar = screen.getByAltText('Avatar');
    expect(storage.get('account').modal).toBe(false);
    fireEvent.click(avatar);
    expect(storage.get('account').modal).toBe(true);
  });

});
