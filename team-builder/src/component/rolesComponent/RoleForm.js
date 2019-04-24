import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addRole } from '../../action';




class RoleForm extends Component {
state={
    role:'',
    id:Date.now() 
}

handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = e => {
    e.preventDefault();
    this.props.addRole(this.state)
    this.setState({
        role:'',
        id:Date.now()
    })
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            name='role'
            placeholder='name of the role'
            value={this.state.role}
            onChange={this.handleChange}
          />
          <button>add new role</button>
      </form>
    )
  }
}

const mapStateToProp = state => ({
    role: state.role
})



export default connect(mapStateToProp,{ addRole })(RoleForm)