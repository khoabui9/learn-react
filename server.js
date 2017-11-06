//server.js
'use strict'
//first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var project = require('./src/model/project');
//and create our instances
var app = express();
var router = express.Router();
//set our port to either a predetermined port number if you have set 
//it up, or 3001
var port = process.env.API_PORT || 3001;

mongoose.connect('mongodb://localhost/quiz', function(err) {
  if (err) {
    console.log('Failed connecting to MongoDB!');
  } else {
    console.log('Successfully connected to MongoDB!');
  }
});


//now we should configure the APi to use bodyParser and look for JSON data in the body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//now we can set the route path & initialize the API
router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});

//adding the /projects route to our /api router
router.route("/projects")
 	//retrieve all projects from the database
	.get(function(req, res) {
		//looks at our project Schema
		Project.find(function(err, projects) {
			if (err)
				res.send(err);
			//responds with a json object of our database projects.
			res.send(projects);
		});
 })
 //post new project to the database
 	.post(function(req, res) {
	 	var project = new Project();
	 //body parser lets us use the req.body
	 	project.title = req.body.title;
	 	project.desc = req.body.desc;
		project.save(function(err) {
	 		if (err)
	 			res.send(err);
	 		res.send({ message: "Project successfully added!" });
 		});
 });

 router.route('/projects/:project_id')
//The put method gives us the chance to update our project based on 
//the ID passed to the route
	.put(function(req, res) {
	Project.findById(req.params.project_id, function(err, project) {
		if (err)
			res.send(err);
	//setting the new title and desc to whatever was changed. If 
	//nothing was changed we will not alter the field.
	(req.body.title) ? project.title = req.body.title : null;
	(req.body.desc) ? project.desc = req.body.desc : null;
	 //save project
	project.save(function(err) {
			if (err)
				res.send(err);
			res.json({ message: 'project has been updated' });
			});
		});
	})
	 //delete method for removing a project from our database
	.delete(function(req, res) {
	//selects the project by its ID, then removes it.
	project.remove({ _id: req.params.project_id }, function(err, project) {
		if (err)
			res.send(err);
		res.json({ message: 'Project has been deleted' })
	})
 });

//Use our router configuration when we call /api
app.use('/api/', router);
//starts the server and listens for requests
app.listen(port, function() {
 console.log('api running on port ${port}');
});