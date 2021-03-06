//========================================================
//DEPENDENCIES

var express = require("express");
var burger = require("../models/burger.js");

//create the router for the app
var router = express.Router();

//========================================================

//routes go in this file -- the equivalent of the api-routes files in other activities

//Create routes and set up logic within those routes where required
router.get("/", function(req, res) {

    //logic to get all burgers from the database
    console.log("initial state");
    burger.all(function(data) {
        var hbsObject = {
            burger_data: data
        };
        res.render("index", hbsObject);
        console.log(data);
    });


});



router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({result});
    });
  });

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id=" + req.params.id;
    console.log(condition);

    //logic to update a burger in the database
    burger.update(req.params.id, function(result){
        console.log(result);
        res.sendStatus(200);
    })
});







//export the router
module.exports = router;