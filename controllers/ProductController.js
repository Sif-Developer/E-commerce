const db = require("../config/database");

const ProductController = {
  getAllProducts(req, res) {
    let sql = "SELECT * FROM products";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
  createProduct(req, res) {
    let sql = `INSERT INTO products (name, price, description) values
            ('${req.body.name}', '${req.body.price}', '${req.body.description}')`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send("New product added successfully :)");
    });
  },
  updateProductById(req, res) {
    let sql = `UPDATE products SET  name = '${req.body.name}',price = ${req.body.price},
             description = '${req.body.description}'  WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send("Products have been updated successfully :)");
    });
  },
  deleteProductById(req, res) {
    let sql = `DELETE FROM products WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Product deleted by Id. Bye,bye");
    });
  },
  getProductById(req, res) {
    let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
  getProductByName(req, res) {
    let sql = `SELECT * FROM products WHERE name = '${req.params.name}'`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
  getProductByPrice(req, res) {
    let sql = `SELECT * FROM products WHERE price = '${req.params.price}'`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
  getProductsPriceHighestToSmallest(req,res) {
    let sql = `SELECT * FROM products order by price desc`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
};

module.exports = ProductController;
