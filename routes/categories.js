const express = require("express");
const router = express.Router();
const db = require("../config/database");
const CategoryController = require("../controllers/CategoryController");

router.post("/createCategory", CategoryController.createCategory);




module.exports = router