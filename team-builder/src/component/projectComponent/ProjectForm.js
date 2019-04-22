import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addProject } from '../../action';

export default class ProjectForm extends Component {

    state= {
        projectName:'',
        projectDisc:'',
        teamMembers:[],
        isLoading: false,
        id: Date.now(),
        error:''
    }

    componentDidMount(){
        this.props.addProject()
    }

  render() {
      const {projectName, projectDisc } =this.state
    return (
      <form>
          <input 
            input='text'
            name='projectName'
            placeholder='Project Name'
            value = {projectName}
          />
          <input 
            input='text'
            name='projectName'
            placeholder='Project Name'
            value = {projectName}
          />
        <button>Add Project</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
    return{
        projectName: this.project.projectName,
        projectDisc: this.project.projectDisc,
        teamMembers: this.project.teamMembers,
        isLoading: this.state.isLoading,
        error: this.state.error,
        id: this.state.id
    }
}


export default connect(mapStateToProps, { addProject })(ProjectForm)