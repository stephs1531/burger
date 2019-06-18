//front-end javascript
//jquery
//document ready
// $(.js-devour).on("submit") {
    // call endpoint with put to update the database from devoured false to devoured true
// }
//========================================================
//DEPENDENCIES

var orm = require("../config/orm.js");

//========================================================

//code that calls ORM functions using burger specific input for the ORM
//from activity 17–Cats
var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },

    create: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(id, cb) {
        var condition = "id = " + id;
      orm.update("burgers", {devoured: true}, condition, cb); 
    }
  };

  module.exports = burger;











//Export burger.js
module.exports = burger;