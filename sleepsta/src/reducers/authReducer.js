import {
  UPDATE_USER,
  USER_UPDATED,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  FETCHING_USER,
  USER_FETCHED
} from "../actions";

const initialState = {
  isLoggingIn: false,
  isUpdating: false,
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
        isUpdating: true
      };
    case USER_UPDATED:
      return {
        ...state,
        error: "",
        isUpdating: false
      };
    case LOGIN_USER_START:
      return {
        ...state,
        error: "",
        isLoggingIn: true
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        error: "",
        isLoggingIn: false
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoggingIn: false
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
        inputs: action.payload[0]
      };
    default:
      return state;
  }
};
