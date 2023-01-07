const mongoose = require("mongoose");
const Category = require("./models/categoryModel");
require("dotenv").config();
const importCategories = async (arr) => {
  const db = process.env.DATABASE_URL;

  await mongoose.set("strictQuery", false);

  await mongoose
    .connect(db)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

  await Category.deleteMany({});

  Promise.all(
    arr.map(async (category) => await Category.create({ name: category }))
  );

  console.log("done");
};
importCategories([
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
]);
