import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://marvel-heroes-api.vercel.app/api'
});
