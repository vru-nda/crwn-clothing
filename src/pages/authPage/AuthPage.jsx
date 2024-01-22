import React from 'react';

import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/SignUp';

import {SignInSignUpContainer} from './authPage.styles';

const AuthPage = () => {
  return (
    <SignInSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInSignUpContainer>
  );
};

export default AuthPage;
