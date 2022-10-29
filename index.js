const exp = require("constants");
const express = require("express");
const app = express();
const PORT = 3000;
const db = require("./config/database");

app.use(express.json());

app.listen(PORT, () => {
  console.log("Server started successfully in port 3000");
});
