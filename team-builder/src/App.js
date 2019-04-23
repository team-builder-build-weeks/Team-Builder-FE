import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import ComponentIndexFile from './component/ComponentIndexFile';
import Login from './component/loginComponent/Login';
import PrivateRoute from './component/PrivateRoute';

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
              <Link to='/protected'>Protected Page</Link>
            </li>
          </ul>
          <Route path='/login' component={Login} />
          <PrivateRoute exact path ='/protected' component= {ComponentIndexFile} />
        </div>
      </Router>
      
    );
  }
}

export default App;
