import { render, cleanup, screen } from '@testing-library/react';
import App from '../';
import React from 'react';

afterEach(cleanup);
beforeEach(() => render(<App />));

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

    test.todo('should change to dark mode whith toggle change');
});

describe('layout', () => {
    test('layout renders', () => {
        const layout = screen.queryByRole('main');
        expect(layout).toBeInTheDocument();
    });
});
