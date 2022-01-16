/*
    Title: rachwalik-ejs-views.js
    Author: David Rachwalik
    Date: 2022/01/16
    Description: Node.js server for WEB-340 site
*/

let http = require("http");
let express = require("express");
let path = require("path");
let app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.get("/", function (request, response) {
    response.render("index", {
        message: "Welcome to the homepage!"
    });
});

app.get("/testview", function (request, response) {
    response.render("testview", {
        firstName: "David",
        lastName: "Rachwalik",
        address: "Omaha, NE"
    });
});

http.createServer(app).listen(8080, function () {
    console.log("EJS-Views app started on port 8080.");
});

// --- Demo Steps ---
// * run server with command: node rachwalik-ejs-views.js
// * navigate to localhost:8080 or enter the command: curl -i localhost:8080
