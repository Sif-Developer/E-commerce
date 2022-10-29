const express = require("express");
const router = express.Router();
const db = require("../config/database");
const { createProduct } = require("../controllers/ProductController");
const ProductController = require("../controllers/ProductController");

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

//* ROUTES TO CONTROLLERS
router.get("/getAllProducts", ProductController.getAllProducts); 
router.post("/createProduct", ProductController.createProduct);
router.put("/updateProductById/:id", ProductController.updateProductById);


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

//* ORDER THE PRODUCTS FROM THE LARGEST TO SMALLEST PRICE
router.get("/getProductsLargestToSmallestPrice", (req, res) => {
  let sql = `SELECT * FROM products order by price desc`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
