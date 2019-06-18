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
var burger = "";
//code that calls ORM functions using burger specific input for the ORM
//from activity 16–MVCExample
// var burger = {
//     all: function(cb) {
//       orm.all("cats", function(res) {
//         cb(res);
//       });
//     },
//     // The variables cols and vals are arrays.
//     create: function(cols, vals, cb) {
//       orm.create("cats", cols, vals, function(res) {
//         cb(res);
//       });
//     },
//     update: function(objColVals, condition, cb) {
//       orm.update("cats", objColVals, condition, function(res) {
//         cb(res);
//       });
//     }
//   };











//Export burger.js
module.exports = burger;