import React, { Component } from 'react'
import { Link } from 'react-router-dom';


import { getProjects, toggleView } from '../../action';
import { connect } from 'react-redux';
import Project from './Project';


class ProjectList extends Component {

  componentDidMount() {
    this.props.getProjects();
  }

  
  render() {
    // console.log('inside list', this.props, this.props.projectList)
    return (
      <div className='projectListWrapper' >
        {this.props.projectList.map((project, id) => (
            <div className="projectListWrap" key={id}>
            {/* <div className="projectListWrap" key={project.id}> */}
              {/* <Link to={`/project/${project}`} > */}
              
              {/* <Link to={`/project/${project.id}`} > */}

              <Project project={project} key={id} />
              
                {/* <Project project={project} key={project.id} id={id} /> */}
              {/* </Link> */}
            </div>)
        )}
      </div>
    )
  }
}

const mapStateToProps = state => (
  // (console.log('map ProjectList', state)),
  {
    projectList: state.projectList
})

export default connect (mapStateToProps, { getProjects, toggleView })(ProjectList);
