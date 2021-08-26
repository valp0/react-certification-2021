import { users } from './users';

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
  },

  exists(key) {
    try {
      window.localStorage.getItem(key);
      return true;
    } catch (error) {
      return false;
    }
  },
};

// Mocked login authentification
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

export { random, buildUrl, storage, loginApi };
