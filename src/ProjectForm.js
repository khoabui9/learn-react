//ProjectForm.js
import React, { Component } from 'react';
import style from './style';

class ProjectForm extends Component {
	 constructor(props) {
		 super(props);
		 this.state = { title: '', desc: '' };
		 this.handleTitleChange = this.handleTitleChange.bind(this);
		 this.handleDescChange = this.handleDescChange.bind(this);
		 this.handleSubmit = this.handleSubmit.bind(this);
	 }
	 handleTitleChange(e) {
	 	this.setState({ title: e.target.value });
	 }
	 handleDescChange(e) {
	 	this.setState({ desc: e.target.value });
	 }
	
	handleSubmit(e) {
			 e.preventDefault();
			 let title = this.state.title.trim();
			 let desc = this.state.desc.trim();
			 if (!desc || !title) {
			 return;
		 }
		 this.props.onProjectSubmit({ title: title, desc: desc });
		 this.setState({ title: '', desc: '' });
	}	
	
	render() {
		 return (
			<form onSubmit={ this.handleSubmit }>
				 <input type='desc' placeholder='title…' onChange={ this.handleTitleChange } />
				 <input type='desc' placeholder='description' onChange={ this.handleDescChange } />
				 <input type='submit' value='Post' />
			</form>
	 );
	 }
}
export default ProjectForm;