import React, {Component} from 'react';

import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';

import {createUserProfileDocument, auth} from '../../firebase/firebaseUtils';

import './signUp.scss';

export default class SignUp extends Component {
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
    const {displayName, email, password, confirmPassword} = this.state;
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);

      if (user) {
        await createUserProfileDocument(user, {displayName});

        this.setState({
          displayName: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account.</h2>
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
      </div>
    );
  }
}
