import { API_ROOT } from './config.api';
import { axiosWithAuth } from './axios.auth.api';

export const getColors = async actions => {
  const { start, success, error } = actions;
  start();
  try {
    const bubblesResponse = await axiosWithAuth(API_ROOT).get('/colors');
    success(bubblesResponse);
  } catch (err) {
    error(err);
    console.log('Error logging in. Please check the error log for more information.');
    console.error(err);
  }
};
