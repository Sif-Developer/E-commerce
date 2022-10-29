const mysql = require("mysql2");

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin123',
  database: 'e_commerce'
});

db.connect();

module.exports = db;