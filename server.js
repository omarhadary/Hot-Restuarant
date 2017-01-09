var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;


var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

var reservation = [];

var waitingList = [];

var entireList = [];

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname,"home.html"));
});

app.get("/add", (request, response) => {
  response.sendFile(path.join(__dirname,"add.html"));
});

app.get("/test", (request, response) => {
  response.sendFile(path.join(__dirname,"test.html"));
});

app.get("/view", (request, response) => {
  response.sendFile(path.join(__dirname,"view.html"));
});

app.get("/api/tables", (request, response) => {
  response.json(reservation);
});

app.post("/api/tables", (request, response) => {
  var newcustomer = request.body;
  entireList.push(newcustomer);
  if (reservation.length < 5) { 
    reservation.push(newcustomer);
  } else {
    waitingList.push(newcustomer)
  }
  response.json(newcustomer)
});

app.get("/api/waitinglist", (request, response) => {
  response.json(waitingList);
});

app.get("/api/entirelist", (request, response) => {
  response.json(entireList);
});
