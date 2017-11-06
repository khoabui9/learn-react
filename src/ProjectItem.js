//Project.js
import React, { Component } from 'react';
import style from './style';

class ProjectItem extends Component {
	constructor(props) {
 		super(props);
/* 		 this.state= {
		 toBeUpdated: false,
		 author: ‘’,
		 text: ‘’
		 };
		 //binding all our functions to this class
		 this.handleTitleChange = this.handleTitleChange.bind(this);
		 this.handleDescChange = this.handleDescChange.bind(this);*/
	};
	render() {
		 return (
			<div className="col-sm-4">
				 	<h1>{this.props.title}</h1>
				 	<p>{this.props.desc}</p>
				</div>
		 )
	}
}
export default ProjectItem;