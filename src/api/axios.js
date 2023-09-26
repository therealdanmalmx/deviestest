import axios from "axios";

const deviesFetch = axios.create({
    baseURL: 'https://devies-reads-be.onrender.com/',
    timeout: 1000,
    headers: {
        Accept: 'application/json',
    }
  });

  export default deviesFetch;