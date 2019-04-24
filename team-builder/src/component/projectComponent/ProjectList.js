import React, { Component } from 'react'
import { Link } from 'react-router-dom';


import { getProjects } from '../../action';
import { connect } from 'react-redux';
import Project from './Project';



class ProjectList extends Component {

    componentDidMount(){
        this.props.getProjects();
    }
    
  render() {
    console.log('inside list', this.props, this.props.projectList)
    return (
      <div>
        {this.props.projectList.map((project, id) => 
            (<div className="projectListWrap" key={project.id}>
            <Link to={`/project/${project.id}`}>
              <Project project={project} key={id} />
            </Link>
              </div>)
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    projectList: state.projectList
})

export default connect (mapStateToProps, { getProjects })(ProjectList);
