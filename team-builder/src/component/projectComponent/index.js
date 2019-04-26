import React from 'react'
import { connect } from 'react-redux';
import { login, getProjects, addProject, deleteProject, toggleView } from '../../action';

import ProjectList from './ProjectList';
import ProjectForm from './ProjectForm';
import Table from '../tableComponent/table.js';

function index(props) { 
  // console.log(props.displayGrid)
  return (
    <div className='projectComponent'>

    <div className="toolbar">
      <button onClick={() => props.toggleView()} >Toggle view</button>
      <ProjectForm />
    </div>
    { props.displayGrid
    ? <ProjectList />
    : <Table />
    }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    displayGrid: state.displayGrid
  }
}

export default connect(mapStateToProps, { toggleView, login, getProjects, addProject, deleteProject })(index)