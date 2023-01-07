const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Category must have a name"],
  },
});

const Category = mongoose.model("categories", categorySchema);

module.exports = Category;
