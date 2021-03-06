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
                [e.target.name]: e.target.value
            }
        });
    }

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials)
            .then((id)=> {
                console.log('inside action',id)
                if(id){
                    this.props.history.push('/protected')
                }else{
                    alert('wrong creds')
                    this.props.history.push('/login')}  
            }) 
    }

  render() {
    return (
      <div className='loginFormWrapper'>
         <form onSubmit={this.login}>
            <input 
                input = 'text'
                name = 'username'
                placeholder = 'username'
                value = {this.state.username}
                onChange = {this.handleChange}
                required
            />
            <input 
                input = 'text'
                name = 'password'
                placeholder = 'password'
                value= {this.state.password}
                onChange = {this.handleChange}
                required
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
