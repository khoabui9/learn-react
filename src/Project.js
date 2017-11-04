//Project.js
import React, { Component } from 'react';
import style from './style';

class Project extends Component {
	 render() {
		 let projectNodes = this.props.data.map(project => {
			 return (
			 	<div className="col-sm-4">
				 	<h1>{project.title}</h1>
				 	<p>{project.desc}</p>

				</div>
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