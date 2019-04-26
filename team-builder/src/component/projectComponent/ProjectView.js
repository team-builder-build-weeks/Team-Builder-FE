import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { getOneProject } from '../../action';
import { connect } from 'react-redux';
import Project from './Project';


class ProjectView extends Component {
  state = {
          id: 3,
          name: 'hello',
          description: 'check out my app'

  }

  componentDidMount() {
    this.props.getProjects();

  }

  render() {
      const project = this.state;

    // console.log('inside list', this.props, this.props.projectList)
    return (
      <div>
            <div className="projectViewWrap" key={project.id}>
                <Project project={project} key={project.id} />
            </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    projectList: state.projectList
})

export default connect (mapStateToProps, { getOneProjects })(ProjectView);
