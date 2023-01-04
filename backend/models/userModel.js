const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    subscribedBooks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "books",
      },
    ],
    userRole: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },
  },
  { timestamps: true }
);

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "authors",
    },
    body: {
      type: String,
      required: true,
    },
    isbn: {
      type: String,
      required: true,
      unique: [true, "ISBN must be unique"],
    },
    category: {
      type: String,
      enum: [],
      required: true,
    },
  },
  { timestamps: true }
);

const users = mongoose.model("users", userSchema);
const author = mongoose.model("author", authorSchema);
const books = mongoose.model("books", bookSchema);

module.exports = {
  users,
  author,
  books,
};
