import { render, cleanup, screen } from '@testing-library/react';
import VideoCard from '../';
import { result } from '../../../mock/youtube-videos-mock';
const video = result.items[1]; // Using sample video
import React from 'react';

afterEach(cleanup);
beforeEach(() => render(<VideoCard video={video} />));

describe('video card', () => {
    test('video card renders', () => {
        const videoCard = screen.queryByTestId('video-card');
        expect(videoCard).toBeInTheDocument();
    });

    test.todo('should change background with dark mode');
});
