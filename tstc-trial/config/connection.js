//Set up MySQL Connection
const mysql = require("mysql");

//Import variables
const HOST = process.env.MYSQL_CONNECTION_HOST;
const PORT = process.env.MYSQL_CONNECTION_PORT;
const USER = process.env.MYSQL_CONNECTION_USER;
const PASSWORD = process.env.MYSQL_CONNECTION_PASSWORD;
const MYSQLDB = process.env.MYSQL_DB;

//MySQL DB Connection Information 
var MYSQLConnection = mysql.createConnection({
  host: HOST,
  port: PORT,
  user: USER,
  password: PASSWORD,
  database: MYSQLDB
});

// Initiate MySQL Connection.
MYSQLConnection.connect(function(err) {
  if (err) {
    console.error("error connecting to MYSQL: " + err.stack);
    return;
  }
  console.log("connected to MYSQL as id " + MYSQLConnection.threadId);
});

// Export connection for ORM to use.
module.exports = MYSQLConnection;