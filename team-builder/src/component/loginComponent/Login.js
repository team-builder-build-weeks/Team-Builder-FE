import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login } from '../../action';

class Login extends Component {

    state = {
        credentials: {
           username: '',
           password: '' 
        }    
    }


    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.value]: e.target.name
            }
        });
    }

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials)
            .then(()=> this.props.history.push('/protected'));
    }

  render() {
    return (
      <div>
         <form onSubmit={this.login}>
            <input 
                input = 'text'
                name = 'username'
                placeholder = 'username'
                value = {this.state.username}
                onChange = {this.handleChange}
            />
            <input 
                input = 'text'
                name = 'password'
                placeholder = 'password'
                value= {this.state.password}
                onChange = {this.handleChange}
            />
            <button>login</button>
        </form> 
        

      </div>
    )
  }
}

const mapStateToProps = state => {
    return{
        fetchingProject: state.fetchingProject,
        error: state.error
    }
}


export default connect(mapStateToProps, { login })(Login)
