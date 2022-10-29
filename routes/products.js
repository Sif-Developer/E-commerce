const express = require("express");
const router = express.Router();
const db = require("../config/database")

//* CREAR TABLE PRODUCTS
router.post("/createTableProducts", (req, res) => {
    let sql =
    "CREATE TABLE products(id int AUTO_INCREMENT,name VARCHAR(45), price DECIMAL(10,2), description VARCHAR(255), PRIMARY KEY(id))";
      db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Table products created succesfully :)");
    });
  });



module.exports = router;