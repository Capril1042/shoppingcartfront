import React, { Component } from 'react';
import SignInForm from './SignInForm.js';
import './SignIn.css';

class SignIn extends Component {
  render() {
    return (
      <div className='signin'>
        <h3> Sign In to Shopper! </h3>
        <SignInForm/>
        <a href="/sign-up">Create an account </a>
      </div>
    );
  }
}

export default SignIn;