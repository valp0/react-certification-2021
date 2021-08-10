function random(limit) {
  return Math.floor(Math.random() * limit);
}

// Builds API call url
function buildUrl(endpoint, params) {
  const API_URL = 'https://www.googleapis.com/youtube/v3';
  const API_KEY = process.env.REACT_APP_KEY4;

  // Build query params
  const queryParams = Object.keys(params).map((key) => {
    if (Array.isArray(params[key])) {
      return `${key}=${params[key].join(',')}`;
    }
    return `${key}=${params[key]}`;
  });

  return `${API_URL}/${endpoint}?${queryParams.join('&')}&key=${API_KEY}`;
}

export { random, buildUrl };
