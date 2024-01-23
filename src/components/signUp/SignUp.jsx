import React, {useState} from 'react';

import CustomButton from '../customButton/CustomButton';
import FormInput from '../formInput/FormInput';

import {connect} from 'react-redux';
import {signUpStart} from '../../redux/user/userActions';
import {SignUpContainer, TitleContainer} from './signUp.styles';

const SignUp = ({signUpStart}) => {
  const [userCreds, setUserCreds] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const {displayName, email, password, confirmPassword} = userCreds;

  const handleChange = (e) => {
    const {value, name} = e.target;
    setUserCreds({...userCreds, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    signUpStart({displayName, email, password});
  };

  return (
    <SignUpContainer>
      <TitleContainer>I do not have an account.</TitleContainer>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          handleChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          handleChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='confirmPassword'
          name='confirmPassword'
          value={confirmPassword}
          handleChange={handleChange}
          label='Confirm Password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign up</CustomButton>
        </div>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (creds) => dispatch(signUpStart(creds)),
});

export default connect(null, mapDispatchToProps)(SignUp);
