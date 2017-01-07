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

var reservation = [{
    name: "Bob",
    phone: "626-646-6116",
    email: "bob@email.com",
    id: "BobBib"
}];
var waitingList = [{
    name: "BJoe",
    phone: "310-646-6116",
    email: "joe@email.com",
    id: "JoeBib"
}];

//routes
app.get("/", function(require, result) {
    result.sendFile(path.join(__dirname, "home.html"));
});

app.get("/add", function(require, result) {
    result.sendFile(path.join(__dirname, "add.html"));
});

app.get("/view", function(require, result) {
    result.sendFile(path.join(__dirname, "view.html"));
});

// api links at bottom of page

app.get("/api/reservation", function(require, result) {
    result.json(reservation);
});

app.get("/api/waitinglist", function(require, result) {
    result.json(waitingList);
});

// creating new reservation
app.post("/api/reservation", function(require, result) {
    var newReservation = require.body;
    console.log(newReservation);
    reservation.push(newReservation);
    result.json(newReservation);  
});

// creating new waitingList
app.post("/api/waitinglist", function(require, result) {
    var newWaitingList = require.body;
    console.log(newWaitingList);
    reservation.push(newWaitingList);
    result.json(newWaitingList);  
});

// searching for customers

// start server

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT)
});