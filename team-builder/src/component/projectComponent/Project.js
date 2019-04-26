// import React, { Component } from 'react'
// import { deleteProject } from '../../action';
// import { connect } from 'react-redux';

// import Members from '../memberComponent';

import React, { Component } from 'react'
import { deleteProject, editProject, getSingleProject } from '../../action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

class Project extends Component {

constructor(props){
  super(props);
    console.log(props) 
    if (props.project) {
      this.state = { 
        ...props.project,
        project: props.project,
        
      }
    } else {
      this.state= {
        id: null,
        name:'',
        description:'',
        project: this.getProjectFromUrl()
    }
  }
  // console.log(this.getProjectFromUrl())
}

getProjectFromUrl = () => {
  // const url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
  const url = this.props.match.params.id;
  const project = this.props.projects.find(projectInArr => {
    return projectInArr.id == url;
  })
  // console.log('map state to props project component', url, project)
  return project;
}

handleEdit= e =>{
  e.preventDefault();
  this.props.editProject(this.state)
 
}

onChange= e =>{
  
  this.setState({
    [e.target.name]: e.target.value
  })
}

  componentDidMount() {
    const project =  this.props.projects.find(projectInArr => {
      return projectInArr.id == this.props.match.params.id;
    }) || this.props.project 


    this.setState({
      id: this.props.match.params.id
    })
  }


  render() {
    // console.log(this.props.match.params.id)

    // console.log('inside project',this.props)

    let { name, description, id } = this.state.project;
    // console.log(project)

    return (
      <div className="projectWrap" onClick={()=>this.props.getSingleProject(id)}>
        <Link to={`/protected/${id}`}><h2>{name}</h2></Link>
        <p>{description}</p>
        <div className="editForm">
          <form onSubmit={this.handleEdit}>
          <input 
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.onChange}
            placeholder='edit project name'
          />
          <input 
            type='text'
            name='description'
            value={this.state.description}
            onChange={this.onChange}
            placeholder='edit description'
          />
       
       <div className="project-buttons">


        <button
            onClick={()=>this.props.deleteProject(id)}
        >Delete</button>


          <button
          onClick={()=>this.props.editProject({ ...this.state, id: this.state.project.id } )}  
          >
          edit 
          </button>
       </div>

          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {

  return ({

    projects: state.projectList
  })
}


export default connect(mapStateToProps, { deleteProject, editProject, getSingleProject })(withRouter(Project))


// export default connect(mapStateToProps, { deleteProject })(Project)

// class Project extends Component {

//   componentDidMount(){
//     // this.props.deleteProject();
//   }

//   render() {
//     // console.log('in project ',this.props)
//     // for prop drilling
//     // const project = this.props.project[this.props.id];

//     console.log(this.props.projectList)

//     // const idFromUrl = parseInt(this.props.match.params.id, 10) // parseInt(window.location.href.substr(window.location.href.lastIndexOf('/') + 1));

//     // const project = this.props.project || this.props.projectList[idFromUrl];
//     // const project =  this.props.projectList[idFromUrl];
//     const project = this.props.project;
//     console.log(project)
//     console.log('inside project',this.props)

//     const{ name, description, id } = project;
//     return (
//       <div className="projectWrap">
//         <h2>{name}</h2>
//         <p>{description}</p>
//         <button
//             onClick={(e)=> {
//               e.preventDefault();
//               this.props.deleteProject(id)
//               }}
//         >Delete </button>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state, ownProps) => {
//   // const urlParam = ownProps.match.params.id;
//   // const projectIndex = state.projectList.findIndex(projectInArr =>{
//     // return projectInArr.id == urlParam;
//   // })
//   const projectIndex = ownProps.id;
//   // console.log(ownProps);
//   return ({
//     projectList: state.projectList[projectIndex]
//   })
// }


// export default connect(mapStateToProps, { deleteProject })(Project)