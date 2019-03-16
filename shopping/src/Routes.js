import React from 'react';
import {Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage.js';
import SignIn from './components/Login/SignIn.js';
import SignUp from './components/Login/SignUp.js';
import Dashboard from './components/Dashboard.js';

const Routes = () => {
    return (
        <Switch>
        <Route path="/" exact component={SignIn} />
        {/* <Route path="/sign-in" component={SignIn} /> */}
        <Route path="/sign-up" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} /> 
        </Switch>
    );
};

export default Routes;