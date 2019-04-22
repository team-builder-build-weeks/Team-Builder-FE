import React, { Component } from 'react'

import { getProjects } from '../../action';
import { connect } from 'react-redux';
import Project from './Project';

export default class ProjectsList extends Component {

    componentDidMount(){
        this.props.getProjects();
    }


  render() {
    return (
      <div>
        {this.props.projectsList.map((project, id) => {
            <Project project={project} key={id} />
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    getProjects: state.getProjects,
    ProjectsList: state.projectsList
})

export default connect (mapStateToProps, { getProjects })(ProjectsList);
