const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "User must have a username"],
    },
    email: {
      type: String,
      required: [true, "User must have an email"],
      validate: {
        validator: validator.isEmail,
        message: "No a valid email",
      },
      unique: [true, "User with that email already exists"],
    },
    password: {
      type: String,
      required: [true, "User must have a password"],
    },
    books: [
      {
        type: Schema.Types.ObjectId,
        ref: "Book",
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const hashedPassword = await bcrypt.hash(this.password, 12);
  this.password = hashedPassword;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
