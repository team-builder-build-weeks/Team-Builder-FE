import React from 'react'
import { connect } from 'react-redux';
import { login, getProjects, addProject, deleteProject } from '../../action';

import ProjectList from './ProjectList';
import ProjectForm from './ProjectForm';

function index() { 
  return (
    <div className='App'>
      <ProjectList />
      <ProjectForm />
    </div>
  )
}

export default connect(null, { login, getProjects, addProject, deleteProject })(index)