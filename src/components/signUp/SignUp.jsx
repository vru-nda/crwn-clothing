import React, {Component} from 'react';

import CustomButton from '../customButton/CustomButton';
import FormInput from '../formInput/FormInput';

import {signUpStart} from '../../redux/user/userActions';
import {SignUpContainer, TitleContainer} from './signUp.styles';
import {connect} from 'react-redux';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = (e) => {
    const {value, name} = e.target;
    this.setState({[name]: value});
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const {signUpStart} = this.props;
    const {displayName, email, password, confirmPassword} = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    signUpStart({displayName, email, password});
  };

  render() {
    return (
      <SignUpContainer>
        <TitleContainer>I do not have an account.</TitleContainer>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={this.state.displayName}
            handleChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='confirmPassword'
            name='confirmPassword'
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign up</CustomButton>
          </div>
        </form>
      </SignUpContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (creds) => dispatch(signUpStart(creds)),
});

export default connect(null, mapDispatchToProps)(SignUp);
