const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
const queries = require('./queries');

//INDEX ROUTE
app.get("/", function(req, res) {
    queries.getAll().then(response => res.send(response));
});

//ERROR ROUTE

app.get("*", function(req, res) {
    res.send("Page Not Found: 707");
});

//HOSTING

app.listen(port, function() {
    console.log("Serving on port 3001.");
});

console.log("exit code 0");
