import { API_ROOT } from './config.api';
import { axiosWithAuth } from './axios.auth.api';

export const getColors = async actions => {
  const { start, success, error } = actions;
  start();
  try {
    const bubblesResponse = await axiosWithAuth(API_ROOT).get('/colors');
    success(bubblesResponse.data);
  } catch (err) {
    error(err);
    console.log('Error logging in. Please check the error log for more information.');
    console.error(err);
  }
};

export const updateColor = async (body, params, actions, redirect = null) => {
  const { start, success, error } = actions;
  start();
  try {
    const updateColorResponse = await axiosWithAuth(API_ROOT).put(`/colors/${params.id}`, body, { ...params });
    console.log(updateColorResponse);
    success(updateColorResponse.data);
    redirect && redirect();
  } catch (err) {
    error(err);
    console.log('Error editing friend. Please check the error log for more information.');
    console.error(err);
  }
};

export const deleteColor = async (params, actions, redirect = null) => {
  const { start, success, error } = actions;
  start();
  try {
    const deleteColorResponse = await axiosWithAuth(API_ROOT).delete(`/colors/${params.id}`, { ...params });
    console.log(deleteColorResponse);
    success(deleteColorResponse.data);
    redirect && redirect();
  } catch (err) {
    error(err);
    console.log('Error editing friend. Please check the error log for more information.');
    console.error(err);
  }
};
