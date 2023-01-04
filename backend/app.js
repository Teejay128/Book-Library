const express = require('express');

const app = express();

// Middlewares

// Connect to database

// Routes

app.get("/", (req, res) => {
    res.status(200).send("Hello World")
})

module.exports = app