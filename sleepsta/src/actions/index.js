import Axios from "axios";

export const REGISTER_USER = "REGISTER_USER";
export const USER_REGISTERED = "USER_REGISTERED";
export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const FETCH_USER_DAILY_DATA_START = "FETCH_USER_DAILY_DATA_START";
export const FETCH_USER_DAILY_DATA_SUCCESS = "FETCH_USER_DAILY_DATA_SUCCESS";
export const FETCH_USER_DAILY_DATA_FAILURE = "FETCH_USER_DAILY_DATA_FAILURE";
export const UPDATE_USER = "UPDATE_USER";
export const USER_UPDATED = "USER_UPDATED";

export const registerUser = newUser => dispatch => {
  console.log("Registering");
  dispatch({ type: REGISTER_USER });
  Axios.post("https://sleepsta.herokuapp.com/api/register/", newUser)
    .then(res => {
      dispatch({ type: USER_REGISTERED, payload: res.data });
      console.log(res);
    })
    .catch(err => console.log(err.response));
};

export const updateUser = (id, headersObj) => dispatch => {
  console.log("Registering");
  dispatch({ type: UPDATE_USER });
  Axios.put(`https://sleepsta.herokuapp.com/api/users/${id}`, headersObj)
    .then(res => {
      dispatch({ type: USER_UPDATED, payload: res.data });
      console.log(res);
    })
    .catch(err => console.log(err.response));
};

export const loginUser = user => dispatch => {
  dispatch({ type: LOGIN_USER_START });
  Axios.post("https://sleepsta.herokuapp.com/api/login/", user)
    .then(res => {
      localStorage.setItem("jwt", res.data.token);
      localStorage.setItem("id", res.data.user.id);
      dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOGIN_USER_FAILURE, payload: err });
    });
};

export const fetchUserDailyData = user_id => dispatch => {
  dispatch({ type: FETCH_USER_DAILY_DATA_START });
  Axios.get(`https://sleepsta.herokuapp.com/api/daily/user/${user_id}`)
    .then(res => {
      console.log("res", res);
      dispatch({ type: FETCH_USER_DAILY_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_USER_DAILY_DATA_FAILURE, payload: err });
    });
};
