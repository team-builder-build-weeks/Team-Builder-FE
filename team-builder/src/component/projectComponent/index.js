import React from 'react'
import { connect } from 'react-redux';
import { login, getProjects, addProject, deleteProject } from '../../action';

import ProjectsList from './ProjectsList';
import ProjectForm from './ProjectForm';

function index() { 
  return (
    <div className='App'>
      <h1>hello</h1>
      <ProjectsList />
      <ProjectForm />
    </div>
  )
}

export default connect(null, { login, getProjects, addProject, deleteProject })(index)