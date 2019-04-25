// import React, { Component } from 'react'
// import { deleteProject } from '../../action';
// import { connect } from 'react-redux';

// import Members from '../memberComponent';



import React, { Component } from 'react'
import { deleteProject, editProject } from '../../action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom';



class Project extends Component {

// componentDidMount(){
//   this.props.deleteProject()
// }
constructor(props){
  super(props);
  this.state={
  id:props.project.id,
  name:'',
  description:''
}
}



handleEdit=e=>{
  e.preventDefault();
  this.props.editProject(this.state)
 
}

onChange=e=>{
  
  this.setState({
    [e.target.name]: e.target.value
  })
}


  render() {
    const project =  this.props.projects.find(projectInArr =>{
      return projectInArr.id == this.props.match.params.id;
    } )||this.props.project 
    console.log('inside project',this.props)
      const{ name, discription, id } = project
    return (
      <div className="projectWrap">
        <Link to={`/protected/${id}`}><h2>{name}</h2></Link>
        <p>{discription}</p>
       
        <button
            onClick={()=>this.props.deleteProject(id)}
        >Delete</button>
        
        <form onSubmit={this.handleEdit}>
        <input 
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.onChange}
          placeholder='edit'
        />
        <input 
          type='text'
          name='description'
          value={this.state.description}
          onChange={this.onChange}
          placeholder='edit'
        />
        <button
        onClick={()=>this.props.editProject(this.state)}  
        >ec
        edit 
        </button>

        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  projects: state.projectList
})


export default connect(mapStateToProps, { deleteProject, editProject })(withRouter(Project))


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