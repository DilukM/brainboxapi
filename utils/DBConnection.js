const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "mysql-185219-0.cloudclusters.net",
  user: "admin",
  port: "10139",
  password: "fYVQAb8p",
  database: "if0_37504427_brainox",
});

module.exports = connection;
