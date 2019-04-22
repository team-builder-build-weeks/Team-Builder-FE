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

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addProject(this.state)
        this.setState({
            projectName:'',
            projectDisc:'',
            teamMembers:[],
            isLoading: false,
            id: Date.now(),
            error:''
        })
    }

  render() {
      const {projectName, projectDisc } =this.state
    return (
      <form onSubmit = {this.handleSubmit}>
          <input 
            input='text'
            name='projectName'
            placeholder='Project Name'
            value = {projectName}
            onChange={this.handleChange}
          />
          <input 
            input='text'
            name='projectName'
            placeholder='Project disc'
            value = {projectDisc}
            onChange={this.handleChange}
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