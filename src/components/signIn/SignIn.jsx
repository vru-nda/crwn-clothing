import React, {Component} from 'react';
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

    const {emailSignInStart} = this.props;
    const {email, password} = this.state;

    emailSignInStart(email, password);
  };

  render() {
    const {googleSignInStart} = this.props;
    return (
      <SignInContainer>
        <TitleContainer>I already have an account.</TitleContainer>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit} noValidate>
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({email, password})),
});

export default connect(null, mapDispatchToProps)(SignIn);
