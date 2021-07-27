import { render, cleanup, screen } from '@testing-library/react';
import SearchBox from '../';
import React from 'react';

afterEach(cleanup);
beforeEach(() => render(<SearchBox />));

describe('search box', () => {
    test('search box renders', () => {
        const searchBox = screen.queryByRole('textbox');
        expect(searchBox).toBeInTheDocument();
    });

    test.todo('should change search state when entering new query');
});
