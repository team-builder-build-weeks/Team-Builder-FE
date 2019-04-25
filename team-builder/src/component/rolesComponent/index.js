import React from 'react'

import { connect } from 'react-redux';
import { addRoles } from '../../action';

import RoleList from './RoleList';
import RoleForm from './RoleForm';


function index() {
  return (
    <div className="roleWrapper">
    <RoleList />
    <RoleForm />
    </div>
  )
}

export default  connect(null, { addRoles })(index);