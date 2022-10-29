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

//* ROUTES TO PRODUCT CONTROLLERS
router.get("/getAllProducts", ProductController.getAllProducts);
router.post("/createProduct", ProductController.createProduct);
router.put("/updateProductById/:id", ProductController.updateProductById);
router.delete("/deleteProductById/:id", ProductController.deleteProductById);
router.get("/getProductById/:id", ProductController.getProductById);
router.get("/getProductByName/:name", ProductController.getProductByName);
router.get("/getProductByPrice/:price", ProductController.getProductByPrice)
router.get("/getProductsPriceHighestToSmallest",ProductController.getProductsPriceHighestToSmallest)


module.exports = router;
