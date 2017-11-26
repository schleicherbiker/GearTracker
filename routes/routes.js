const express = require("express");
const router = express.Router();
const Plant = require("../models/Plant.js");
const Guide = require("../models/Guide.js");
const PlantPos = require("../models/PlantPos.js");
const GuidePos = require("../models/GuidePos.js");
const request = require("request");

	// GET /plants
	router.get("/plants", function(req, res) {
	  // Returns all plants where parentLevel is true.
	  Plant.find({parentLevel: true}, function(err, doc){
	    res.json(doc);
	  });
	});

	// GET /guides
	router.get("/guides", function(req, res) {
	  // Returns all guides
	  Guide.find({}, function(err, doc){
	    res.json(doc);
	  });
	});

	// GET /plant/:id
	router.get("/plants/:id", function(req, res) {
	  // Returns a particular plant or category page based on ID
	  Plant.find({_id: req.params.id}, function(err, doc){
	    res.json(doc);
	  });
	});

	// GET /guides/:id
	router.get("/guides/:id", function(req, res) {
	  // Returns a particular guide based on ID
	  Guide.find({_id: req.params.id}, function(err, doc){
	    res.json(doc);
	  });
	});

	// GET /pos_plants
	router.get("/pos_plants", function(req, res) {
	  // Returns all suggested plants
	  PlantPos.find({}, function(err, doc){
	    res.json(doc);
	  });
	});

	// GET /pos_guides
	router.get("/pos_guides", function(req, res) {
	  // Returns all suggested guides
	  GuidePos.find({}, function(err, doc){
	    res.json(doc);
	  });
	});

	// POST /pos_plant
	router.post("/pos_plant", function(req, res) {
	  // Saves a possible plant to the queue for consideration
	  // Currently the full body is passed in. 
	  // Ideally validation should be added. 
	  PlantPos.create(req.body, function (err, small) {
	    if (err) {
	      res.send(err)
	    } else {
	      // saved!
	      if (!err) res.sendStatus(200);
	    }; 
	  })
	});

	// POST /pos_guides
	router.post("/pos_guides", function(req, res) {
	  //Saves a guide to the queue for consideration
	  // Currently the full body is passed in. 
	  // Ideally validation should be added. 
	  GuidePos.create(req.body, function (err, small) {
	    if (err) {
	      res.send(err)
	    } else {
	      // saved!
	      if (!err) res.sendStatus(200);
	    }; 
	  })
	});

	// POST /plant
	router.post("/plant", function(req, res) {
		// Saves a plant to the database
	    Plant.create(req.body, function (err, small) {
		    if (err) {
		      res.send(err)
		    } else {
		      // saved!
  			  res.sendStatus(200);
		    }; 
		})
	});

	// POST /guide/:id
	router.post("/guide", function(req, res) {
		// Saves a guide to the database
	    Guide.create(req.body, function (err, small) {
		    if (err) {
		      res.send(err)
		    } else {
		      // saved!
  			  res.sendStatus(200);
		    }; 
		})
	});

	// DELETE /pos_plant/:id
	router.delete("/pos_plant/:id", function(req, res) {
	  // Deletes a plant from the consideration queue
	  PlantPos.findByIdAndRemove(req.params.id, (err, todo) => {  
		  res.sendStatus(200);
	  });
	});

	// DELETE /pos_guide/:id
	router.delete("/pos_guide/:id", function(req, res) {
	  // Deletes a guide from the consideration queue
	  GuidePos.findByIdAndRemove(req.params.id, (err, todo) => {  
	      res.sendStatus(200);
	  });
	});

module.exports = router;