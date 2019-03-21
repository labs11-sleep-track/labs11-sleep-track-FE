import Axios from "axios";

export const REGISTER_USER = "REGISTER_USER";
export const USER_REGISTERED = "USER_REGISTERED";

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
