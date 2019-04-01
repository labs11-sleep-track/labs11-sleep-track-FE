import Axios from "axios";

export const FETCHING_USER = "FETCHING_USER";
export const USER_FETCHED = "USER_FETCHED";
export const USER_FAILURE = "USER_FAILURE";

export const UPDATE_USER = "UPDATE_USER";
export const USER_UPDATED = "USER_UPDATED";

export const FETCH_USER_DAILY_DATA_START = "FETCH_USER_DAILY_DATA_START";
export const FETCH_USER_DAILY_DATA_SUCCESS = "FETCH_USER_DAILY_DATA_SUCCESS";
export const FETCH_USER_DAILY_DATA_FAILURE = "FETCH_USER_DAILY_DATA_FAILURE";

const baseURL =
  window.location.hostname === "localhost"
    ? "http://localhost:4000"
    : "https://sleepsta.herokuapp.com";

export const getUser = () => dispatch => {
  console.log("Fetching");
  dispatch({ type: FETCHING_USER });

  return Axios.get(`${baseURL}/api/users/me`, {
    headers: {
      Authorization: localStorage.getItem("jwt")
    }
  })
    .then(res => {
      dispatch({ type: USER_FETCHED, payload: res.data });
      console.log(res);
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: USER_FAILURE, payload: err });
    });
};

export const updateUser = user => {
  return dispatch => {
    console.log("Updating");
    dispatch({ type: UPDATE_USER });
    return Axios.put(`${baseURL}/api/users/${user.id}`, user, {
      headers: {
        Authorization: localStorage.getItem("jwt")
      }
    })
      .then(res => {
        dispatch({ type: USER_UPDATED, payload: res.data });
        console.log(res);
      })
      .catch(err => console.log(err.response));
  };
};
export const fetchUserDailyData = user_id => dispatch => {
  dispatch({ type: FETCH_USER_DAILY_DATA_START });
  Axios.get(`${baseURL}/api/daily/user/${user_id}`)
    .then(res => {
      console.log("res", res);
      dispatch({ type: FETCH_USER_DAILY_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_USER_DAILY_DATA_FAILURE, payload: err });
    });
};
