import {userActionTypes} from './userTypes';

// Sign in
export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

// Sign up
export const signUpStart = (userCredentials) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({user, additionalData}) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: {user, additionalData},
});

export const signUpfailure = (err) => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: err,
});

// Current user
export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});

// Sign out
export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});
export const signOutfailure = (err) => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: err,
});
