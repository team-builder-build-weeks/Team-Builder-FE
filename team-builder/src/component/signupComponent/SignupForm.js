import React, { Component } from 'react'
import axios from 'axios';

class SignupForm extends Component {
  
  state={
    username:'',
    password:'',
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    axios.post('https://team-builders.herokuapp.com/api/register', this.state);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text'
          name='username'
          placeholder='username'
          value={this.state.username}
          onChange={this.handleChange}
        />

        <input 
          type='text'
          name='password'
          placeholder='password'
          value={this.state.password}
          onChange={this.handleChange}
        />

        <button>Sign up</button>
      </form>
    )
  }
}


export default SignupForm;