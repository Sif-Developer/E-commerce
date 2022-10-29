const express = require("express");
const router = express.Router();
const db = require("../config/database");

//* CREATE TABLE PRODUCTS
router.post("/createTableProducts", (req, res) => {
  let sql =
    "CREATE TABLE products(id int AUTO_INCREMENT,name VARCHAR(45), price DECIMAL(10,2), description VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Table products created successfully :)");
  });
});

//* SHOW TABLE PRODUCTS

router.get("/showAllProducts", (req, res) => {
  let sql = "SELECT * FROM products";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//* CREATE PRODUCT
router.post("/createProduct", (req, res) => {
  let sql = `INSERT INTO products (name, price, description) values
            ('${req.body.name}', '${req.body.price}', '${req.body.description}')`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("New product added successfully :)");
  });
});

module.exports = router;
