import { render, cleanup, screen } from '@testing-library/react';
import Layout from '../';
import React from 'react';

afterEach(cleanup);
beforeEach(() => render(<Layout />));

describe('layout', () => {
    test('layout renders', () => {
        const layout = screen.queryByRole('main');
        expect(layout).toBeInTheDocument();
    });
});
