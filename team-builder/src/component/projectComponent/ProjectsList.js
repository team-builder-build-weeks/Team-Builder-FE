import React, { Component } from 'react'

import { getProjects } from '../../action';
import { connect } from 'react-redux';
import Project from './Project';

class ProjectsList extends Component {

    componentDidMount(){
        this.props.getProjects();
    }


  render() {
      console.log(this.state)
    return (
      <div>
        {this.props.projectsList.map((project, id) => 
            <Project project={project} key={id} />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    getProjects: state.getProjects,
    projectsList: state.projectsList
})

export default connect (mapStateToProps, { getProjects })(ProjectsList);
