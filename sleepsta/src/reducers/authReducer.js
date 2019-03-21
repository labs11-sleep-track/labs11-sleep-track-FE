import { REGISTER_USER,
         USER_REGISTERED } from '../actions';


const initalState = {
    isRegistering: false,
    isLoggingIn: false,
    error: null
};

export const authReducer = (state = initalState, action) => {
switch (action.type) {
case REGISTER_USER:
 return{
   ...state,
   error: '',
   isRegistering: true
 }
case USER_REGISTERED:
 return{
     ...state,
     error: '',
     isRegistering: false
 }
default:
 return state;
}
};