import axios from "axios";

const deviesFetch = axios.create({
    baseURL: 'https://devies-reads-be.onrender.com',
    timeout: 1000,
    headers: {
        Accept: 'application/json',
    }
  });
const bookFetch = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: {
        Accept: 'application/json',
    }
  });

  export {deviesFetch, bookFetch};