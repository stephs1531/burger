//========================================================
//DEPENDENCIES

var connection = require("./connection.js");

//========================================================

//Set up MySQL commands to retrieve and store data

//Select All
selectAll();

//Insert One Burger
insertOne();

//Update One Burger
updateOne();

//Export ORM object
module.exports = orm;