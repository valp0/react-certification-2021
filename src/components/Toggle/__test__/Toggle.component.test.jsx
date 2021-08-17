import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import Toggle from '../';
import React from 'react';
import StateProvider from '../../../providers/State';
import { storage } from '../../../utils/fns';

afterEach(cleanup);
beforeEach(() => render(
  <StateProvider>
    <Toggle />
  </StateProvider>
));

describe('toggle switch', () => {
  test('toggle switch renders', () => {
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toBeInTheDocument();
  });

  test('toggle switch toggles dark mode', () => {
    const toggle = screen.getByRole('checkbox');
    expect(storage.get('context').darkMode).toBe(false);
    fireEvent.click(toggle);
    expect(storage.get('context').darkMode).toBe(true);
    fireEvent.click(toggle);
    expect(storage.get('context').darkMode).toBe(false);
  });

});
