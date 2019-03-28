import {
  UPDATE_USER,
  USER_UPDATED,
  FETCHING_USER,
  USER_FETCHED
} from "../actions";

const initialState = {
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
        inputs: action.payload,
        id: action.payload.id
      };
    default:
      return state;
  }
};
