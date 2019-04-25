import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Navbar, NavbarBrand, NavItem } from 'reactstrap';

import './App.css';
import ComponentIndexFile from './component/ComponentIndexFile';
import Login from './component/loginComponent/Login';
import PrivateRoute from './component/PrivateRoute';
import SignupForm from './component/signupComponent/SignupForm';
import ProjectView from './component/projectComponent/Project';
import Project from './component/projectComponent/Project';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar color='light' light expand='md' >
            <NavbarBrand>Team Builder</NavbarBrand>
            <NavItem>
              <Link to='/login' component={Login}>Login</Link>
            </NavItem>
            <NavItem>
              <Link to='/signup' component={SignupForm}>Sign Up</Link>
            </NavItem>
          </Navbar>

          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignupForm} />
          {/* <Route path='/project/:id' render={props => <ProjectView {...props}/>} /> */}
          <PrivateRoute exact path='/protected' component={ComponentIndexFile} />
          <PrivateRoute exact path='/protected/:id' indi={true} component={Project} />
          
        </div>
      </Router>
      
    );
  }
}

export default App;
