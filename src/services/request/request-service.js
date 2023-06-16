import axios from 'axios';

const request = axios.create({
  baseURL: 'https://luanvantotnghiep-production.up.railway.app/',
});

export const getAuthToken = () => {
  const accessToken = localStorage.getItem('accessToken');
  return { accessToken };
};

export const get = async (path, options = {}) => {
  const response = await request.get(path, options);
  return response.data;
};

export const post = async (path, options = {}) => {
  const response = await request.post(path, options);
  return response.data;
};

export const put = async (path, options = {}) => {
  const response = await request.put(path, options);
  return response.data;
};

export default request;
