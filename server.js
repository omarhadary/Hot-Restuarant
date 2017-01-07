//NPM dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

// Express to handle parsing

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var customer = [];

//routes
// Home page route
app.get("/", function(require, result) {
    result.sendFile(path.join(__dirname, "home.html"));
});

app.get("/add", function(require, result) {
    result.sendFile(path.join(__dirname, "add.html"));
});

app.get("/view", function(require, result) {
    result.sendFile(path.join(__dirname, "view.html"));
});

// searching for customers

// creating new customers

// api links at bottom of page

// start server

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT)
});