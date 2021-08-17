import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import SearchBox from '../';
import React from 'react';
import StateProvider from '../../../providers/State';
import { storage } from '../../../utils/fns';

afterEach(cleanup);
beforeEach(() => render(
  <StateProvider>
    <SearchBox />
  </StateProvider>
));

describe('search box', () => {
  test('search box renders', () => {
    const searchBox = screen.getByPlaceholderText('Search');
    expect(searchBox).toBeInTheDocument();
  });

  test('input change is handled', () => {
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Wizeline' } });
    expect(input.value).toBe('Wizeline');
    userEvent.type(input, '{enter}')
    expect(storage.get('context').query).toBe('Wizeline');
  });

  test.todo('should change search state when entering new query');
});
