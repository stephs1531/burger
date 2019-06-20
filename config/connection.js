//same as cats
// Set up MySQL connection.
var mysql = require("mysql");



//JawsDB connection
// if (process.env.JAWSDB_URL) {
//   var connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
  var connection = mysql.createConnection({
    host: "uoa25ublaow4obx5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "iu00q3dxnd78c0hu",
    password: "lp39njtqdped4bh7",
    database: "zxh9tb0rd24mbdje"
  });

// };

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;