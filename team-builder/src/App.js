import React, { Component } from 'react';

import { Route, NavLink } from 'react-router-dom';

import './App.css';
import ComponentIndexFile from './component/ComponentIndexFile';


class App extends Component {
  render() {
    return (
      <div className="App">
      <nav>
        <h1>Admin Log In</h1>
        <NavLink exact to='/login'>
         Login
        </NavLink>
      </nav>
       <ComponentIndexFile />
      </div>
    );
  }
}

export default App;
