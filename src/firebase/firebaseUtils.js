import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: 'AIzaSyAvOwoiLSmoeWvl8e43eIuF0KhyChRhHp4',
  authDomain: 'crwn-clothing-5d356.firebaseapp.com',
  projectId: 'crwn-clothing-5d356',
  storageBucket: 'crwn-clothing-5d356.appspot.com',
  messagingSenderId: '349232593254',
  appId: '1:349232593254:web:6f53d11b73870884dfb0a7',
  measurementId: 'G-RYNFFGDB0S',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // if user is not already in db, add new
  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({displayName, email, createdAt, ...additionalData});
      console.log('User Created!');
    } catch (error) {
      console.log('Error creating user', error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google signin
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;