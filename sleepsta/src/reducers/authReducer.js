import {
  UPDATE_USER,
  USER_UPDATED,
  FETCHING_USER,
  USER_FETCHED
} from "../actions";

const initialState = {
  isUpdating: false,
  isUpdated: false,
  isFetching: false,
  error: null,
  jwt: null,
  id: null,
  inputs: {}
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        error: "",
        isUpdating: true,
        isUpdated: false
      };
    case USER_UPDATED:
      return {
        ...state,
        error: "",
        isUpdating: false,
        isUpdated: true
      };
    case FETCHING_USER:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case USER_FETCHED:
      return {
        ...state,
        error: "",
        isFetching: false,
        inputs: action.payload
      };
    default:
      return state;
  }
};
