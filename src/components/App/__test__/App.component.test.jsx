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

  test.todo('should change to dark mode whith toggle change');
});

describe('layout', () => {
  test('layout renders', () => {
    const layout = screen.getByRole('main');
    expect(layout).toBeInTheDocument();
  });
});
