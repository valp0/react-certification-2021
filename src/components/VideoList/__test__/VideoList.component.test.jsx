import { render, cleanup, screen } from '@testing-library/react';
import VideoList from '../';
import React from 'react';

afterEach(cleanup);
beforeEach(() => render(<VideoList />));

describe('video list', () => {
    test('video list renders', () => {
        const videoList = screen.queryByTestId('video-list');
        expect(videoList).toBeInTheDocument();
    });

    test.todo('should change background with dark mode');
});
