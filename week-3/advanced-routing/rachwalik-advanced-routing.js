/*
    Title: rachwalik-advanced-routing.js
    Author: David Rachwalik
    Date: 2022/01/23
    Description: Node.js server for WEB-340 site
*/

const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");

let app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.get("/:employeeId", function (request, response) {
    var employeeId = parseInt(request.params.employeeId, 10);
    response.render("index", {
        employeeId: employeeId
    });
});
http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080");
});

// --- Commands ---
// * run server with command: node rachwalik-advanced-routing.js
// * navigate to localhost:8080 or enter the command: curl -i localhost:8080

// - Test Cases -
// localhost:8080/1234
// localhost:8080/5678
// localhost:8080/9012
