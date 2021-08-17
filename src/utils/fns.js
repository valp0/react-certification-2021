function random(limit) {
  return Math.floor(Math.random() * limit);
}

// Builds API call url
function buildUrl(endpoint, params) {
  const API_URL = 'https://www.googleapis.com/youtube/v3';
  const API_KEY = 'AIzaSyAf0JJTmiGjCManj9fYeFis5dfts9PYr00';

  // Build query params
  const queryParams = Object.keys(params).map((key) => {
    if (Array.isArray(params[key])) {
      return `${key}=${params[key].join(',')}`;
    }
    return `${key}=${params[key]}`;
  });

  return `${API_URL}/${endpoint}?${queryParams.join('&')}&key=${API_KEY}`;
}

const storage = {
  get(key) {
    try {
      const rawValue = window.localStorage.getItem(key);
      return JSON.parse(rawValue);
    } catch (error) {
      console.error(`Error parsing storage item "${key}".`);
      return null;
    }
  },

  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
    console.log(value);
  },

  exists() {
    if (window.localStorage.length > 0) {
      return true;
    }

    return false;
  },
};

export { random, buildUrl, storage };
