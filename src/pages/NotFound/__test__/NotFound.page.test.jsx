import { render, cleanup, screen } from '@testing-library/react';
import NotFound from '../';
import React from 'react';

afterEach(cleanup);
beforeEach(() => render(
  <NotFound />
));

describe('not found page', () => {
  test('not found text renders', () => {
    const whoops = screen.getByText('Whoops! It seems this page does not exist!');
    expect(whoops).toBeInTheDocument();
  });

  test('not found gif renders', () => {
    const gif = screen.getByAltText('page not found');
    expect(gif).toBeInTheDocument();
  });

  test.todo('should change background with dark mode');
});
