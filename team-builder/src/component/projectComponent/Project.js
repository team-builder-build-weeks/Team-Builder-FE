import React, { Component } from 'react'
import { deleteProject } from '../../action';
import { connect } from 'react-redux';

import Members from '../memberComponent';



class Project extends Component {


  render() {
    const project = this.props.project || this.props.projects.find(projectInArr =>{
      return projectInArr.id == this.props.match.params.id;
    } )
    console.log('inside project',this.props)
      const{ name, discription, id } = project
    return (
      <div className="project-wrap">
        <h2>{name}</h2>
        <p>{discription}</p>
        {/* {teamMembers.map((member, id)=>( 
            <Members member={member} key={id}/>
            )
          )} */}
        <button
            onClick={()=>this.props.deleteProject(id)}
        >Delete Project</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  projects: state.projectList
})


export default connect(mapStateToProps, { deleteProject })(Project)