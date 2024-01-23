import {userActionTypes} from './userTypes';

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});
