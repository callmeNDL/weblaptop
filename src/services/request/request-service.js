import axios from 'axios';

const request = axios.create();

export const get = async (url, path, options = {}) => {
  const response = await request.get(url, path, options);
  return response.data;
};

export const post = async (url, path, options = {}) => {
  const response = await request.post(url, path, options);
  return response.data;
};

export const put = async (url, path, options = {}) => {
  const response = await request.put(url, path, options);
  return response.data;
};

export default request;
