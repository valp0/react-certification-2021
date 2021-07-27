import { render, cleanup } from '@testing-library/react';
import Toggle from '../';
import React from 'react';

afterEach(cleanup);

describe('toggle switch', () => {
    test('toggle switch renders', () => {
        const { getByText } = render(<Toggle />);
        expect(getByText('Dark mode')).toBeInTheDocument();
    });

    test.todo('should toggle dark mode when clicked')
});
