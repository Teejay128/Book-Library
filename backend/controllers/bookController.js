const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const Book = require("../models/bookModel");
const ApiFeatures = require("../utils/ApiFeatures");

exports.getAllBooks = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Book.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const books = await features.query;

  res.status(200).json({
    status: "success",
    results: books.length,
    data: {
      books,
    },
  });
});

exports.getBook = catchAsync(async (req, res, next) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return next(new AppError("No book found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      book,
    },
  });
});

exports.createBook = catchAsync(async (req, res, next) => {
  req.body.author = req.user.id;
  const book = await Book.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      book,
    },
  });
});

exports.updateBook = catchAsync(async (req, res, next) => {
  delete req.body.author;
  const book = await Book.findById(req.params.id);

  if (!book) {
    return next(new AppError("No book found with that ID", 404));
  }

  if (req.user.id !== book.author.id) {
    return next(new AppError("You are not allowed to edit this book", 401));
  }

  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      updatedBook,
    },
  });
});

exports.deleteBook = catchAsync(async (req, res, next) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return next(new AppError("No book found with that ID", 404));
  }

  if (req.user.id !== book.author.id) {
    return next(new AppError("You are not allowed to delete this book", 401));
  }

  await book.remove();
  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.getMyBooks = catchAsync(async (req, res, next) => {
  const books = await Book.find({ author: req.user.id });
  res.status(200).json({
    status: "success",
    results: books.length,
    data: {
      books,
    },
  });
});
