import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import Toggle from '../';
import React from 'react';
import AppearanceProvider from '../../../providers/Appearance';
import { storage } from '../../../utils/fns';

afterEach(cleanup);
beforeEach(() => render(
  <AppearanceProvider>
    <Toggle />
  </AppearanceProvider>
));

describe('toggle switch', () => {
  test('toggle switch renders', () => {
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toBeInTheDocument();
  });

  test('toggle switch toggles dark mode', () => {
    const toggle = screen.getByRole('checkbox');
    expect(storage.get('appearance').darkMode).toBe(false);
    fireEvent.click(toggle);
    expect(storage.get('appearance').darkMode).toBe(true);
    fireEvent.click(toggle);
    expect(storage.get('appearance').darkMode).toBe(false);
  });

});
