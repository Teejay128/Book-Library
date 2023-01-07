const express = require("express");
const bookController = require("../controllers/bookController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(bookController.getAllBooks)
  .post(authController.protect, bookController.createBook);

router.get("/mybooks", authController.protect, bookController.getMyBooks);
router
  .route("/:id")
  .get(bookController.getBook)
  .patch(authController.protect, bookController.updateBook)
  .delete(authController.protect, bookController.deleteBook);

module.exports = router;
