import React from 'react';

import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/SignUp';

import './authPage.scss';

const AuthPage = () => {
  return (
    <div className='sign-in-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default AuthPage;
