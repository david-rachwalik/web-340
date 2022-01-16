/*
    Title: rachwalik-routes.js
    Author: David Rachwalik
    Date: 2022/01/16
    Description: Node.js server for WEB-340 site
*/

var express = require("express");
var http = require("http");
var app = express();

app.get("/", function (request, response) {
    response.end("Welcome to the homepage!");
});
app.get("/about", function (request, response) {
    response.end("Welcome to the about page!");
});
app.get("/contact", function (request, response) {
    response.end("Welcome to the contact page!");
});
app.use(function (request, response) {
    response.statusCode = 404;
    response.end("404!");
});
http.createServer(app).listen(8080);

// --- Demo Steps ---
// * run server with command: node rachwalik-routes.js
// * navigate to localhost:8080 or enter the command: curl -i localhost:8080
