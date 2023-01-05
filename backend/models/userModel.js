const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      require: [true, "User must have a username"],
    },
    email: {
      type: String,
      required: [true, "User must have an email"],
      unique: [true, "User with that email already exists"],
    },
    password: {
      type: String,
      required: [true, "User must have a password"],
    },
    subscribedBooks: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "books",
    },
    userRole: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
