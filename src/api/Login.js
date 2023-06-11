import axiosClient from './axiosClient';

const login = {
  Login() {
    const url = '/login';
    return axiosClient.login(url);
  },
};
