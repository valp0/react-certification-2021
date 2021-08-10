import { render, cleanup, screen } from '@testing-library/react';
import Toggle from '../';
import React from 'react';

afterEach(cleanup);
beforeEach(() => render(<Toggle />));

describe('toggle switch', () => {
  test('toggle switch renders', () => {
    const toggle = screen.getByRole('checkbox')
    expect(toggle).toBeInTheDocument();
  });

  test('"dark mode" renders', () => {
    const text = screen.getByText('Dark mode');
    expect(text).toBeInTheDocument();
  });

  test.todo('should toggle dark mode when clicked')
});
