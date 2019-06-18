//========================================================
//DEPENDENCIES

var express = require("express");
var path = require("path");

//========================================================

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
var connection = require("./config/connection.js");

app.use(routes);

//=====================================================
//ROUTES

app.get("/", function(req, res) {
  //we're doing the get when we load the page
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index", { burgers: data });
  });
});

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});