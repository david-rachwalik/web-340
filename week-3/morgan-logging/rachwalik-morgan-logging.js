/*
    Title: rachwalik-ejs-views.js
    Author: David Rachwalik
    Date: 2022/01/23
    Description: Node.js server for WEB-340 site
*/

const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");

let app = express();
app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine
app.use(logger("short"));
app.get("/", function (request, response) {
    response.render("index", {
        message: "Welcome to Rachwalik's morgan-logger example!"
    });
});

http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080");
});

// --- Commands ---
// * run server with command: node rachwalik-morgan-logging.js
// * navigate to localhost:8080 or enter the command: curl -i localhost:8080
