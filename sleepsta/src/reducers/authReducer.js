import {
  REGISTER_USER,
  USER_REGISTERED,
  UPDATE_USER,
  USER_UPDATED
} from "../actions";

const initalState = {
  isRegistering: false,
  isLoggingIn: false,
  isUpdating: false,
  error: null,
  jwt: null,
  id: null
};

export const authReducer = (state = initalState, action) => {
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
        isUpdating: true
      };
    case USER_UPDATED:
      return {
        ...state,
        error: "",
        isUpdating: false
      };
    default:
      return state;
  }
};
