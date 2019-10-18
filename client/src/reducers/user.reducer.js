import { USER_LOGIN_START, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR } from '../actions';

const initialState = {
  isLoggingIn: false,
  isLoggedIn: localStorage.getItem('token') || false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        error: null,
        isLoggedIn: true,
        isLoggingIn: false,
      };
    case USER_LOGIN_ERROR:
      return {
        error: action.payload,
        isLoggingIn: false,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
