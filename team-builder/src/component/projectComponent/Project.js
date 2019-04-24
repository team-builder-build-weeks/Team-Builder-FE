import React, { Component } from 'react'
import { deleteProject } from '../../action';
import { connect } from 'react-redux';

import Members from '../memberComponent';



class Project extends Component {


  render() {
    console.log('inside projects',this.props)
      const{ projectName, projectDisc, teamMembers, id } = this.props.project
    return (
      <div>
        <h2>{projectName}</h2>
        <p>{projectDisc}</p>
        {teamMembers.map((member, id)=>( 
            <Members member={member} key={id}/>
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