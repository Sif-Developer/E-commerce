const express = require("express");
const router = express.Router();
const db = require("../config/database");
const CategoryController = require("../controllers/CategoryController");

router.post("/createCategory", CategoryController.createCategory);
router.get("/showCategories", CategoryController.showCategories);
// router.get("/selectCategoryByName/:name",CategoryController.selectCategoryByName);
router.get("/selectCategoryById/:id", CategoryController.selectCategoryById);




module.exports = router