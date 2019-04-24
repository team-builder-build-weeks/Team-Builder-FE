import React, { Component } from 'react'
import Role from './Role';

import { addRole } from '../../action';
import { connect } from 'react-redux';

class RoleList extends Component {
  render() {
    return (
      <div>
        {this.props.rolelist.map((role, id)=>{
            <Role role={role} key={id}/>
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    rolelist: state.roleList
})

export default  connect(mapStateToProps, {addRole})(RoleList)