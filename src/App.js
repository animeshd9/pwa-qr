import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from './components/auth/singUp';
import SignIn from './components/auth/singIn';
import Home from './components/content/Home';
import { AuthProvider } from './components/auth/auth';
import PrivateRoute from './components/hoc/PrivateRoute';

export default function App(){

    return (
        <AuthProvider>
        <Router>
            <div>
                <PrivateRoute exact path='/' component={Home}/>
                <Route exact path="/singin" component={SignIn}/>
                <Route exact path="/singup" component={SignUp} />
            </div>
        </Router>
        </AuthProvider>

    )

}