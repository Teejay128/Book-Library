const express = require("express");
const categoryController = require("../controllers/categoryController");
const authController = require("../controllers/authController");

const router = express.Router();

router.get("/", categoryController.getAllCategories);
router.post("/", authController.protect, categoryController.createCategory);

module.exports = router;
