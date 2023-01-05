const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Book must have a title"],
      unique: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "authors",
    },
    body: {
      type: String,
      required: [true, "Book must have a body"],
    },
    isbn: {
      type: String,
      required: [true, "Book must have an isbn"],
      unique: [true, "ISBN must be unique"],
    },
    category: {
      type: String,
      enum: {
        values: [
            "Adventure",
            "Romance",
            "Sci-fi",
            "Horror",
            "Thriller",
            "Cooking",
            "History",
            "Mystery",
            "Biography",
            "Religious",
            "Education",
            "Buisness"
        ],
        message: "Invalid category"
      },
      default: "Adventure",
      required: true,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("books", bookSchema);

module.exports = Book
