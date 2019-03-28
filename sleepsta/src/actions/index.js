import Axios from "axios";

export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const FETCH_USER_DAILY_DATA_START = "FETCH_USER_DAILY_DATA_START";
export const FETCH_USER_DAILY_DATA_SUCCESS = "FETCH_USER_DAILY_DATA_SUCCESS";
export const FETCH_USER_DAILY_DATA_FAILURE = "FETCH_USER_DAILY_DATA_FAILURE";

export const UPDATE_USER = "UPDATE_USER";
export const USER_UPDATED = "USER_UPDATED";

export const FETCHING_USER = "FETCHING_USER";
export const USER_FETCHED = "USER_FETCHED";

export const updateUser = dispatch => {
  console.log("Updating");
  dispatch({ type: UPDATE_USER });
  Axios.put(
    `https://sleepsta.herokuapp.com/api/users/${localStorage.getItem("id")}`,
    {
      headers: { Authorization: localStorage.getItem("jwt") }
    }
  )
    .then(res => {
      dispatch({ type: USER_UPDATED, payload: res.data });
      console.log(res);
    })
    .catch(err => console.log(err.response));
};

// export const loginUser = user => dispatch => {
//   console.log("Logging in");
//   dispatch({ type: LOGIN_USER_START });
//   Axios.post("https://sleepsta.herokuapp.com/api/login/", user)
//     .then(res => {
//       localStorage.setItem("jwt", res.data.token);
//       localStorage.setItem("id", res.data.user.id);
//       console.log("res", res);
//       dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       dispatch({ type: LOGIN_USER_FAILURE, payload: err });
//     });
// };

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

export const getUser = () => dispatch => {
  console.log("Fetching");
  dispatch({ type: FETCHING_USER });

  return Axios.get(`https://sleepsta.herokuapp.com/api/users/me`, {
    headers: {
      Authorization: localStorage.getItem("jwt")
    }
  })
    .then(res => {
      dispatch({ type: USER_FETCHED, payload: res.data });
      console.log(res);
    })
    .catch(err => console.log(err));
};
