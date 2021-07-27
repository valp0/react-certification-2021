import { render, cleanup, screen } from '@testing-library/react';
import Header from '../';
import React from 'react';

afterEach(cleanup);
beforeEach(() => render(<Header />));

describe('header', () => {
    test('header renders', () => {
        const header = screen.queryByRole('navigation');
        expect(header).toBeInTheDocument();
    });

    test('header elements render', () => {
        const navButton = screen.queryByRole('button');
        const searchBox = screen.queryByRole('textbox');
        const toggle = screen.queryByRole('checkbox');
        const avatar = screen.queryByAltText('Avatar');

        expect(navButton).toBeInTheDocument();
        expect(searchBox).toBeInTheDocument();
        expect(toggle).toBeInTheDocument();
        expect(avatar).toBeInTheDocument();
    });
});
