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

//* GET ALL PRODUCTS

router.get("/getAllProducts", (req, res) => {
  let sql = "SELECT * FROM products";
  db.query(sql, (err, result) => {
    if (err) throw err;
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

//* UPDATE PRODUCT BY ID
router.put("/updateProductById/:id", (req, res) => {
  let sql = `UPDATE products SET  name = '${req.body.name}',price = ${req.body.price},
           description = '${req.body.description}'  WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Products have been updated successfully :)");
  });
});

//* DELETE PRODUCT BY ID
router.delete("/deleteProductById/:id", (req, res) => {
  let sql = `DELETE FROM products WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Product deleted by Id. Bye,bye");
  });
});

//* GET PRODUCT BY ID
router.get("/getProductById/:id", (req, res) => {
  let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//* GET PRODUCT BY NAME
router.get("/getProductByName/:name", (req, res) => {
  let sql = `SELECT * FROM products WHERE name = '${req.params.name}'`; 
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//* GET PRODUCT BY PRICE
router.get("/getProductByPrice/:price", (req, res) => {
  let sql = `SELECT * FROM products WHERE price = '${req.params.price}'`; 
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
