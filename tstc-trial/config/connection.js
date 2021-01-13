//Set up MySQL Connection
const mysql = require("mysql");

//Import variables
const HOST = process.env.MYSQL_CONNECTION_HOST || "localhost";
const PORT = process.env.MYSQL_CONNECTION_PORT || 3306;
const USER = process.env.MYSQL_CONNECTION_USER || "root";
const PASSWORD = process.env.MYSQL_CONNECTION_PASSWORD || "";
const MYSQLDB = process.env.MYSQL_DB || "visitor_log_db";

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