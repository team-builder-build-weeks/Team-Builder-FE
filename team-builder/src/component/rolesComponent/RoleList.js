import React, { Component } from 'react'
import Role from './Role';

import { addRoles } from '../../action';
import { connect } from 'react-redux';

class RoleList extends Component {
  render() {
    return (
      <div>
        {this.props.rolelist.map((role, id)=>
            <Role role={role} key={id}/>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => (
    (console.log('mapprop in rolelist', state)),
    {
    rolelist: state.roleList
})

export default  connect(mapStateToProps, {addRoles})(RoleList)