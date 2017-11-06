//Project.js
import React, { Component } from 'react';
import style from './style';
import ProjectItem from './ProjectItem';

class Project extends Component {
	render() {
		 let projectNodes = this.props.data.map(project => {
			 return (
				 	<ProjectItem title = {project.title} desc={project.desc} uniqueID={ project._id } key={ project._id}></ProjectItem>
			 )
		 })
			 return (
				 <div className="col-sm-12">
				 { projectNodes }
				 </div>
			 );
		 }
	}
export default Project;