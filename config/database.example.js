const mysql = require("mysql2");

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'write your password',
  database: 'e_commerce'
});

db.connect();

module.exports = db;
