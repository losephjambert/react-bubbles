import { API_ROOT } from './api.config';
import { axiosWithAuth } from './axiosWithAuth';

export const login = async (credentials, actions) => {
  const { start, success, error } = actions;
  start();
  try {
    const response = await axiosWithAuth(API_ROOT).post('/login', credentials);
    success();
    localStorage.setItem('token', response.data.payload);
  } catch (err) {
    error(err);
    console.log('Error logging in. Please check the error log for more information.');
    console.error(err);
  }
};