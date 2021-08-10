import { render, cleanup, screen } from '@testing-library/react';
import App from '../';
import React from 'react';
import { result } from '../../../mock/youtube-videos-mock';

// Importing and mocking axios
import axios from 'axios';
jest.mock('axios');

// Mocking axios response
axios.get.mockResolvedValue(result);

afterEach(cleanup);
beforeEach(() => render(<App />));

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

  test.todo('should change to dark mode whith toggle change');
});

describe('layout', () => {
  test('layout renders', () => {
    const layout = screen.getByRole('main');
    expect(layout).toBeInTheDocument();
  });
});
