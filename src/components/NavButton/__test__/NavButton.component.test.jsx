import { render, cleanup, screen } from '@testing-library/react';
import NavButton from '../';
import React from 'react';

afterEach(cleanup);
beforeEach(() => render(<NavButton />));

describe('nav button', () => {
    test('nav button renders', () => {
        const navButton = screen.queryByRole('button');
        expect(navButton).toBeInTheDocument();
    });

    test.todo('should render side menu when clicked');
});
