const express = require("express");
const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controllers/errorController");
const userRouter = require("./routes/userRoutes");
const bookRouter = require("./routes/bookRoutes");
const categoryRouter = require("./routes/categoryRoutes");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// Middlewares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/books", bookRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/categories", categoryRouter);

app.all("*", (req, res, next) => {
  return next(new AppError("Route not found on this server", 404));
});

app.use(globalErrorHandler);

module.exports = app;
