const exp = require("constants");
const express = require("express");
const app = express();
const PORT = 3000;
const db = require("./config/database");

app.use(express.json());

//* ROUTES
app.use("/products",require("./routes/products"));



//* ENDPOINT CREATE DATA BASE
app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE e_commerce";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created successfully :)...");
  });
});

app.listen(PORT, () => {
  console.log("Server started successfully in port 3000");
});
