import React, { Component } from 'react';
import './SignUpForm.css';

class SignUpForm extends Component {
       state = {
        username: '',
        password: '',
        error:'',
        success: false
     }

onChangeUsername= (event)=> {
    this.setState({ username:event.target.value})
    }

onChangePassword=(event)=> {
    this.setState({password:event.target.value})
}

  submitForm =(e) => {
        e.preventDefault();
        //allow user to sign up
        // redirect to log-in
    }

  render() {
    return (
        <div className='signupform-container'>
            <form className='signupform' OnSubmit={this.submitForm}>
                <label className='labelsignup'>
                    username:
                    <input className='inputsignup'
                        type="username"
                        name= "username"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        placeholder=' enter username'/>
                </label>
                <label className='label-signup'>
                    password:
                    <input className='inputsignup' 
                    type="password"
                        name= "password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        placeholder='choose password'/>
                </label>
                    <button type="submit">Sign-Up</button>
            </form>
        </div>
    );
  }
}

export default SignUpForm;