import Axios from "axios";

export const REGISTER_USER = "REGISTER_USER";
export const USER_REGISTERED = "USER_REGISTERED";
export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

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

export const loginUser = user => dispatch => {
  dispatch({ type: LOGIN_USER_START });
  Axios.post("https://sleepsta.herokuapp.com/api/login/", user)
    .then(res => {
      localStorage.setItem("jwt", res.data.token);
      dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOGIN_USER_FAILURE, payload: err });
    });
};
