const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: {
    type: String,
    required: [true, "Author must have a name"]
  },
});

const Author = mongoose.model("authors", userSchema);

module.exports = Author
