import React, {useState} from 'react';
import {connect} from 'react-redux';

import CustomButton from '../customButton/CustomButton';
import FormInput from '../formInput/FormInput';

import {
  emailSignInStart,
  googleSignInStart,
} from '../../redux/user/userActions';

import {
  ButtonsContainer,
  SignInContainer,
  TitleContainer,
} from './signIn.styles';

const SignIn = ({emailSignInStart, googleSignInStart}) => {
  const [userCreds, setUserCreds] = useState({
    email: '',
    password: '',
  });

  const {email, password} = userCreds;

  const handleChange = (e) => {
    const {value, name} = e.target;
    setUserCreds({...userCreds, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
  };

  return (
    <SignInContainer>
      <TitleContainer>I already have an account.</TitleContainer>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit} noValidate>
        <FormInput
          type='email'
          name='email'
          value={email}
          handleChange={handleChange}
          label='email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <ButtonsContainer>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isgooglesignin='true'
          >
            Sign in with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({email, password})),
});

export default connect(null, mapDispatchToProps)(SignIn);
