import {all, call, put, takeLatest} from 'redux-saga/effects';

import {
  signInFailure,
  signInSuccess,
  signOutSuccess,
  signUpSuccess,
  signUpfailure,
} from './userActions';

import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
  googleProvider,
} from '../../firebase/firebaseUtils';

import {userActionTypes} from './userTypes';

// get snapshot from firebase db
export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

// Signin with google
export function* signInWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

// Signin with email and password
export function* signInWithEmail({payload: {email, password}}) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

// signup
export function* signUp({payload: {displayName, email, password}}) {
  try {
    const {user} = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({user, additionalData: {displayName}}));
  } catch (error) {
    yield put(signUpfailure(error));
  }
}

// sign in after user signs up
export function* signInAfterSingUp({payload: {user, additionalData}}) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

// Check for the signed in user
export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;

    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

// sign out
export function* signout() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSingUp);
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, signInWithEmail);
}

export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signout);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(isUserAuthenticated),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
