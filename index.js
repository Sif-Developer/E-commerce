const exp = require("constants");
const express = require("express");
const app = express();
const PORT = 3000;
const db = require("./config/database");

app.use(express.json());
app.use("/categories",require("./routes/categories"));

app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE e_commerce";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created successfully :)...");
  });
});

app.get("/createTableCategories", (req, res) => {
    let sql =
        "CREATE TABLE categories(id int AUTO_INCREMENT,name VARCHAR(255), PRIMARY KEY(id))";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send("Categories table created...");
    });
});


app.listen(PORT, () => {
  console.log("Server started successfully in port 3000");
});
