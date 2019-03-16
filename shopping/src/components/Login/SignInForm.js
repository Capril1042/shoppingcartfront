import React, { Component } from 'react';
import './SignInForm.css';

class SignInForm extends Component {
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
        //log user in
        //take user to user landing
    }

  render() {
    return (
        <div className='signinform-container'>
            <form className='signinform' OnSubmit={this.submitForm}>
                <label className='labelsignin'>
                    username:
                    <input className='inputsignin'
                        type="username"
                        name= "username"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        placeholder=' enter username'/>
                </label>
                <label className='label-signin'>
                    password:
                    <input className='inputsignin' 
                    type="password"
                        name= "password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        placeholder='enter password'/>
                </label>
                    <button type="submit">LOG-IN</button>
            </form>
        </div>
    );
  }
}

export default SignInForm;