import { render, cleanup, screen } from '@testing-library/react';
import Home from '../';
import React from 'react';

afterEach(cleanup);
beforeEach(() => render(<Home />));

describe('home page', () => {
    test('welcome text renders', () => {
        const title = screen.queryByText('Welcome to the Challenge!');
        expect(title).toBeInTheDocument();
    });

    test('video list renders', () => {
        const videoList = screen.queryByTestId('video-list');
        expect(videoList).toBeInTheDocument();
    });

    test.todo('should change background with dark mode');
});
