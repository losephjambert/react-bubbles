import {
  COLORS_FETCH_START,
  COLORS_FETCH_SUCCESS,
  COLORS_FETCH_ERROR,
  COLORS_UPDATE_START,
  COLORS_UPDATE_SUCCESS,
  COLORS_UPDATE_ERROR,
  COLORS_DELETE_START,
  COLORS_DELETE_SUCCESS,
  COLORS_DELETE_ERROR,
} from '../actions';

const initialState = {
  isFetching: false,
  error: null,
  colorsList: [],
  updateColor: {
    id: null,
    isUpdating: false,
    error: null,
    updateSuccess: false,
  },
  createColor: {
    isCreating: false,
    error: null,
  },
  deleteColor: {
    id: null,
    isDeleting: false,
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
        updateColor: {
          ...state.updateColor,
          isUpdating: true,
          updateSuccess: false,
        },
      };
    case COLORS_UPDATE_SUCCESS:
      const updatedColorsList = state.colorsList.map(color => {
        return color.id === action.payload.id ? action.payload : color;
      });
      return {
        ...state,
        colorsList: updatedColorsList,
        updateColor: {
          ...state.updateColor,
          isUpdating: false,
          id: null,
          updateSuccess: true,
        },
      };
    case COLORS_UPDATE_ERROR:
      return {
        ...state,
        updateColor: {
          ...state.updateColor,
          isUpdating: false,
          error: action.payload,
          updateSuccess: false,
        },
      };
    case COLORS_DELETE_START:
      return {
        ...state,
        deleteColor: {
          ...state.deleteColor,
          isDeleting: true,
        },
      };
    case COLORS_DELETE_SUCCESS:
      const filteredColorsList = state.colorsList.filter(color => {
        return color.id !== action.payload;
      });
      return {
        ...state,
        colorsList: filteredColorsList,
        deleteColor: {
          ...state.deleteColor,
          isDeleting: false,
          editing: false,
          id: null,
        },
      };
    case COLORS_DELETE_ERROR:
      return {
        ...state,
        deleteColor: {
          ...state.deleteColor,
          isDeleting: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
