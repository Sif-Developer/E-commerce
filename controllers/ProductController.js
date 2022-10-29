const db = require("../config/database");

//* CREATE TABLE PRODUCTS
const ProductController = {
  getAllProducts(req, res) {
    let sql = "SELECT * FROM products";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  // * CREATE PRODUCT
  createProduct(req, res) {
    let sql = `INSERT INTO products (name, price, description) values
            ('${req.body.name}', '${req.body.price}', '${req.body.description}')`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send("New product added successfully :)");
    });
  },
};

//* CREATE PRODUCT

module.exports = ProductController;
