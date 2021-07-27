import { render, cleanup, screen } from '@testing-library/react';
import Avatar from '../';
import React from 'react';

afterEach(cleanup);
beforeEach(() => render(<Avatar />));

describe('avatar', () => {
    test('avatar renders', () => {
        const avatar = screen.queryByAltText('Avatar');
        expect(avatar).toBeInTheDocument();
    });
});
