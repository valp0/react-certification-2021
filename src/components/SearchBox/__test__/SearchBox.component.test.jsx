import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import SearchBox from '../';
import React from 'react';

const onSubmit = jest.fn();
afterEach(cleanup);
beforeEach(() => render(<SearchBox handler={onSubmit} />));

describe('search box', () => {
  test('search box renders', () => {
    const searchBox = screen.getByPlaceholderText('Search');
    expect(searchBox).toBeInTheDocument();
  });

  test('input change is handled', () => {
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Wizeline' } });
    expect(input.value).toBe('Wizeline');
    userEvent.type(input, 'Wizeline{enter}')
    expect(onSubmit).toHaveBeenCalled();
  });

  test.todo('should change search state when entering new query');
});
