import {
  FETCH_USER_DAILY_DATA_START,
  FETCH_USER_DAILY_DATA_SUCCESS,
  FETCH_USER_DAILY_DATA_FAILURE
} from "../actions";

const initialState = {
  userDailyData: [],
  isFetchingUserDailyData: false,
  error: null
};

export const compReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DAILY_DATA_START:
      return {
        ...state,
        error: null,
        isFetchingUserDailyData: true
      };
    case FETCH_USER_DAILY_DATA_SUCCESS:
      return {
        ...state,
        error: null,
        isFetchingUserDailyData: false,
        userDailyData: action.payload
      };
    case FETCH_USER_DAILY_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetchingUserDailyData: false
      };
    default:
      return state;
  }
};
