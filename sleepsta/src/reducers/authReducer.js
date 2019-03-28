import {
  REGISTER_USER,
  USER_REGISTERED,
  UPDATE_USER,
  USER_UPDATED,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  FETCHING_USER,
  USER_FETCHED
} from "../actions";

const initialState = {
  isRegistering: false,
  isLoggingIn: false,
  isLoggedIn: false,
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
    case REGISTER_USER:
      return {
        ...state,
        error: "",
        isRegistering: true
      };
    case USER_REGISTERED:
      return {
        ...state,
        error: "",
        isRegistering: false
      };
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
    case LOGIN_USER_START:
      return {
        ...state,
        error: "",
        isLoggingIn: true,
        isLoggedIn: false
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        error: "",
        isLoggingIn: false,
        isLoggedIn: true
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoggingIn: false,
        isLoggedIn: false
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
