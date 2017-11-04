import React from 'react';
import ReactDOM from 'react-dom';
import ProjectList from './ProjectList';
import 'bootstrap/dist/css/bootstrap.css';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
 <ProjectList url='http://localhost:3001/api/projects' pollInterval={2000} />,
 document.getElementById('root')
);