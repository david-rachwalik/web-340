/*
    Title: rachwalik-hello-world.js
    Author: David Rachwalik
    Date: 2022/01/16
    Description: Node.js server for WEB-340 site
 */

// Import declaration
let express = require("express");
let http = require("http");

var app = express();
app.use(function (request, response) {
    console.log("In comes a request to: " + request.url);
    response.end("Hello World");
});

http.createServer(app).listen(8080);

// --- Demo Steps ---
// * run server with command: node rachwalik-hello-world.js
// * navigate to localhost:8080 or enter the command: curl -i localhost:8080
