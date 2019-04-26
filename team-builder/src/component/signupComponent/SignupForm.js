import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { signup } from '../../action';

class SignupForm extends Component {
  
  state={
      
      username:'',
      password:''
    
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.signup(this.state);
    // axios.post('https://team-builders.herokuapp.com/api/register', this.state);
  }
  render() {
    return (
      <div className='signupWrapper'>
        <form onSubmit={this.handleSubmit}>
        <input 
          type='text'
          name='username'
          placeholder='your username'
          value={this.state.username}
          onChange={this.handleChange}
          required
        />

        <input 
          type='text'
          name='password'
          placeholder='your password'
          value={this.state.password}
          onChange={this.handleChange}
          required
        />

        <button>Sign up</button>
      </form>
    </div>
      
    )
  }
}



 export default connect(null, { signup })(SignupForm) ;
