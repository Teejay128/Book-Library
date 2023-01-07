const express = require('express');
const dbConnect = require('./dbconnection/dbconnect')



const app = express();

// Middlewares

// Connect to database
dbConnect()

// Routes

app.get("/", (req, res) => {
    res.status(200).send("Hello World")
})

module.exports = app