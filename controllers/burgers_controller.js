//========================================================
//DEPENDENCIES

var express = require("express");
var orm = require("../models/burger.js");

//create the router for the app
var router = express.Router();

//========================================================

//routes go in this file -- the equivalent of the api-routes files in other activities

//Create routes and set up logic within those routes where required
// router.get("/", function(req, res) {

//     //logic to get all burgers from the database

//     res.render("index", xxx);
// });

// router.post("/api/burgers", function(req, res) {

//     //logic to post a new burger to the database

//     res.json({result});
// });

// router.put("/api/burgers/:id", function(req, res) {
//     var condition = "id=" + req.params.id;
//     console.log(condition);

//     //logic to update a burger in the database
// });







//export the router
module.exports = router;