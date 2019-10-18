import {
  COLORS_FETCH_START,
  COLORS_FETCH_SUCCESS,
  COLORS_FETCH_ERROR,
  COLORS_UPDATE_START,
  COLORS_UPDATE_SUCCESS,
  COLORS_UPDATE_ERROR,
} from '../actions';

const initialState = {
  isFetching: false,
  error: null,
  colorsList: [],
  updateColor: {
    id: null,
    isUpdating: false,
    error: null,
  },
  createColor: {
    isCreating: false,
    error: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COLORS_FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case COLORS_FETCH_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        colorsList: action.payload,
      };
    case COLORS_FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    // case COLORS_CREATE_START:
    //   return {
    //     ...state,
    //     createFriend: {
    //       isCreating: true,
    //       error: null,
    //     },
    //   };
    // case COLORS_CREATE_SUCCESS:
    //   return {
    //     ...state,
    //     colorsList: action.payload,
    //     createFriend: {
    //       isCreating: false,
    //       error: null,
    //     },
    //   };
    // case COLORS_CREATE_ERROR:
    //   return {
    //     ...state,
    //     createFriend: {
    //       isCreating: false,
    //       error: action.payload,
    //     },
    //   };
    case COLORS_UPDATE_START:
      return {
        ...state,
        updateFriend: {
          ...state.updateFriend,
          isUpdating: true,
        },
      };
    case COLORS_UPDATE_SUCCESS:
      return {
        ...state,
        colorsList: action.payload,
        updateFriend: {
          ...state.updateFriend,
          isUpdating: false,
          editing: false,
          id: null,
        },
      };
    case COLORS_UPDATE_ERROR:
      return {
        ...state,
        updateFriend: {
          ...state.updateFriend,
          isUpdating: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
