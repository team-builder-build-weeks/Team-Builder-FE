import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import ComponentIndexFile from './component/ComponentIndexFile';
import Login from './component/loginComponent/Login';
import PrivateRoute from './component/PrivateRoute';
import SignupForm from './component/signupComponent/SignupForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to ='/login' component = {Login}>Login</Link>
            </li>
            <li>
              <Link to='/signup' component = {SignupForm}>Sign Up</Link>
            </li>
          </ul>
          <Route path='/login' component={Login} />
          <Route path='/signup' component = {SignupForm} />
          <PrivateRoute exact path ='/protected' component= {ComponentIndexFile} />
        </div>
      </Router>
      
    );
  }
}

export default App;
