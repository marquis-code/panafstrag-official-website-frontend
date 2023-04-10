const writeToCache = (url, data) => {
  if (process.client) {
    return localStorage.setItem(url, JSON.stringify(data));
  }
};

const readFromCache = (url) => {
  if (process.client) {
    return JSON.parse(localStorage.getItem(url)) || null;
  }
};

export { readFromCache, writeToCache };
