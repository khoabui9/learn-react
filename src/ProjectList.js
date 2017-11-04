//Project.js
import React, { Component } from 'react';
import axios from 'axios';
import Project from './Project';
import ProjectForm from './ProjectForm';
import data from './data';
import style from './style';

class ProjectList extends Component {
	constructor(props) {
		 super(props);
		 this.state = { data: [] };
	  	 this.loadProjectFromServer = this.loadProjectFromServer.bind(this);
		 this.handleProjectSubmit = this.handleProjectSubmit.bind(this);
	}
	loadProjectFromServer() {
		 axios.get(this.props.url)
		 .then(res => {
		 	this.setState({ data: res.data });
		 })
	}
	handleProjectSubmit(project) {
		let projects = this.state.data;
		let newProjects = projects.concat([project]);
		this.setState({ data: newProjects });
		axios.post(this.props.url, project)
			.then(res => {
			this.setState({ data: res });
		})
			.catch(err => {
			console.error(err);
		});
	}

	handleProjectDelete(id) {
		axios.delete(`${this.props.url}/${id}`)
		.then(res => {
		console.log('Comment deleted');
	})
		.catch(err => {
		console.error(err);
		});
	}
	handleProjectUpdate(id, project) {
	 //sends the project id and new author/text to our api
		axios.put(`${this.props.url}/${id}`, project)
		.catch(err => {
		console.log(err);
		})
	}

	componentDidMount() {
	 	this.loadProjectFromServer();
	 	setInterval(this.loadProjectFromServer, this.props.pollInterval);
	}
	render() {
		 return (
		 <div className='row'>
			<div className='col-sm-12'>
				<ProjectForm onProjectSubmit={ this.handleProjectSubmit }/>
			</div>
		 	<div className='col-sm-12'>
		 		<h1>Project</h1>
		 		<Project data={ this.state.data }/>
		 	</div>		
		 </div>
		 );
	 	}
	}

export default ProjectList;