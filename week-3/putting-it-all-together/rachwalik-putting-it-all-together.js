/*
    Title: rachwalik-putting-it-all-together.js
    Author: David Rachwalik
    Date: 2022/01/23
    Description: Node.js server for WEB-340 site
*/

const Product = require("./product").Product;
const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");

// Setup server views and logger
let app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

// Setup server routes
app.get("/", function (request, response) {
    response.render("index", {
        message: "home page"
    });
});
app.get("/about", function (request, response) {
    response.render("about", {
        message: "about page"
    });
});
app.get("/contact", function (request, response) {
    response.render("contact", {
        message: "contact page"
    });
});
app.get("/products", function (request, response) {
    const mockProducts = [
        new Product("203", "clothing"),
        new Product("205", "flooring"),
        new Product("204", "chairs"),
        new Product("206", "computers"),
        new Product("207", "cleaning supplies"),
        new Product("208", "sports equipment")
    ];
    console.log("mockProducts: ", mockProducts);

    response.render("products", {
        message: "products page",
        products: mockProducts
    });
});

// Start the server
http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080.");
});

// --- Commands ---
// * run server with command: node rachwalik-putting-it-all-together.js
// * navigate to localhost:8080 or enter the command: curl -i localhost:8080
