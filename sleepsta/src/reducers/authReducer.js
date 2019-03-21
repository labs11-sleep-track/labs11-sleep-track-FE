import {
  REGISTER_USER,
  USER_REGISTERED,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from "../actions";

const initialState = {
  isRegistering: false,
  isLoggingIn: false,
  error: null
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
    default:
      return state;
  }
};
