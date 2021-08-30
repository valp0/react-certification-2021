import { users } from './users';

// Builds API call url
function buildUrl(endpoint, params) {
  const API_URL = 'https://www.googleapis.com/youtube/v3';
  const API_KEY = process.env.REACT_APP_YTKEY;

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
  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },

  get(key) {
    try {
      const rawValue = window.localStorage.getItem(key);
      return JSON.parse(rawValue);
    } catch (error) {
      console.error(`Error parsing storage item "${key}".`);
      return null;
    }
  },

  remove(key) {
    try {
      window.localStorage.removeItem(key);
      return null;
    } catch (error) {
      console.error(`Error deleting storage item "${key}".`);
      return null;
    }
  }
};

// Mocked login authentication
async function loginApi(rUsername, rPassword) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (users[rUsername]?.password === rPassword) {
          return resolve({ avatar: users[rUsername].avatarUrl, name: users[rUsername].name, user: users[rUsername].user });
        }
        return reject(new Error('Invalid credentials'));
      } catch {
        return reject(new Error('Invalid credentials'));
      }
    }, 777);
  });
}

export { buildUrl, storage, loginApi };
