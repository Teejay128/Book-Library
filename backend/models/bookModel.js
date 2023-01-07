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
      type: Schema.Types.ObjectId,
      ref: "User",
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
          "Business",
        ],
        message: "Invalid category",
      },
      default: "Adventure",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

bookSchema.pre(/^find/, function (next) {
  this.populate({ path: "author", select: "username" });
  next();
});

const Book = mongoose.model("books", bookSchema);

module.exports = Book;
