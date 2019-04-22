import React, { Component } from 'react'
import { deleteProject } from '../../action';
import { connect } from 'react-redux';

class Project extends Component {

    componentDidMount(){
        this.props.deleteProject()
    }

  render() {
      const{ projectName, projectDisc, teamMembers, id } = this.props.project
    return (
      <div>
        <h2>{projectName}</h2>
        <p>{projectDisc}</p>
        <p>{teamMembers}</p>
        <button
            onClick={()=>this.props.deleteProject(id)}
        >Delete Project</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return{
        deleteProject: state.deleteProject,
        projects: state.projects
    }
}

export default connect(mapStateToProps, { deleteProject })(Project)