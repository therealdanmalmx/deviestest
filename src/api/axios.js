export const instance = axios.create({
    baseURL: 'https://devies-reads-be.onrender.com/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'devies-reads'}
  });