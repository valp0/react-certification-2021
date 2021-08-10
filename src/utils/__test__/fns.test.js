import { buildUrl } from '../fns';

describe('buildUrl function', () => {
  it('builds url properly', () => {
    const API_URL = 'https://www.googleapis.com/youtube/v3';
    const endpoint = 'search';
    const testParams = {
      q: 'Wizeline',
      type: 'video',
      part: ['id', 'snippet'],
      order: 'relevance',
      maxResults: 12,
    };

    const url = buildUrl(endpoint, testParams);
    const index = url.indexOf('&key=');
    const noKeyUrl = url.slice(0, index);
    expect(noKeyUrl).toBe(
      `${API_URL}/search?q=Wizeline&type=video&part=id,snippet&order=relevance&maxResults=12`
    );
  });
});
