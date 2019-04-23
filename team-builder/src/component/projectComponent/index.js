import React from 'react'
import { connect } from 'react-redux';
import { login, getProjects, addProject, deleteProject } from '../../action';

import ProjectsList from './ProjectsList';
import ProjectFrom from './ProjectForm';

function index() { 
  return (
    <div className='App'>
      <ProjectsList />
      <ProjectFrom />
    </div>
  )
}

export default connect(null, { login, getProjects, addProject, deleteProject })(index)