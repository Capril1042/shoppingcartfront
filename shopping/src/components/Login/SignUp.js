import React, { Component } from 'react';
import SignUpForm from './SignUpForm.js';
import './SignUp.css';


class SignUp extends Component {
  render() {
    return (
      <div className='signup'>
        <h3> Sign up for Shopper! </h3>
        <SignUpForm/>
        <a href="/">Login to existing acount </a>
      </div>
    );
  }
}

export default SignUp;