/*
    Title: rachwalik-if-else-render.js
    Author: David Rachwalik
    Date: 2022/02/06
    Description: Exercise 5.2 for WEB-340 site
*/

const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

const f = ['Mike', 'Jessi', 'Jay', 'Rich'];

// Setup server routes
app.get('/', (request, response) => {
  response.render('index', {
    names: f,
  });
});

// Start the server
http.createServer(app).listen(8080, () => {
  console.log('Application started on port 8080!');
});

// --- Commands ---
// cd E:\Repos\web-340\week-5\if-else-render
// * run server with command: node rachwalik-if-else-render.js
// * navigate to localhost:8080 or enter the command: curl -i localhost:8080
