import { combineReducers } from "redux";
import { authReducer as auth } from "./authReducer";
import { compReducer } from "./compReducer";

export default combineReducers({ auth, compReducer });
