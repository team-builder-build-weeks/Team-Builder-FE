import React, { Component } from 'react'
import { deleteProject } from '../../action';
import { connect } from 'react-redux';

class Project extends Component {


  render() {
    console.log('inside projects',this.props)
      const{ projectName, projectDisc, teamMembers, id } = this.props.project
    return (
      <div>
        <h2>{projectName}</h2>
        <p>{projectDisc}</p>
        {teamMembers.map((member, id)=>(
          <>
            <div>{member.name}</div>
            <div>{member.email}</div>
            <div>{member.role}</div>
           </> 
            )
          )}
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
        
    }
}

export default connect(mapStateToProps, { deleteProject })(Project)