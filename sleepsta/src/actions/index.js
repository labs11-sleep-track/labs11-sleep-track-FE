import Axios from "axios";

export const REGISTER_USER = "REGISTER_USER";
export const USER_REGISTERED = "USER_REGISTERED";

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
