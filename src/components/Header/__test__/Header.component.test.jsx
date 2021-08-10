import { render, cleanup, screen } from '@testing-library/react';
import Header from '../';
import React from 'react';

afterEach(cleanup);
beforeEach(() => render(<Header />));

describe('header', () => {
  test('header renders', () => {
    const header = screen.getByRole('navigation');
    expect(header).toBeInTheDocument();
  });

  test('header elements render', () => {
    const navButton = screen.getByRole('button');
    const searchBox = screen.getByRole('textbox');
    const toggle = screen.getByRole('checkbox');
    const avatar = screen.getByAltText('Avatar');

    expect(navButton).toBeInTheDocument();
    expect(searchBox).toBeInTheDocument();
    expect(toggle).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
  });
});
