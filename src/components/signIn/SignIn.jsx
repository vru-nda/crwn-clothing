import React, {Component} from 'react';

import CustomButton from '../customButton/CustomButton';
import FormInput from '../formInput/FormInput';

import {auth, signInWithGoogle} from '../../firebase/firebaseUtils';

import {
  ButtonsContainer,
  SignInContainer,
  TitleContainer,
} from './signIn.styles';

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    const {value, name} = e.target;
    this.setState({[name]: value});
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({name: '', email: ''});
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <SignInContainer>
        <TitleContainer>I already have an account.</TitleContainer>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <ButtonsContainer>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignin>
              Sign in with Google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
