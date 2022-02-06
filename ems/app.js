/*
    Title: app.js
    Author: David Rachwalik
    Date: 2022/02/06
    Description: Node.js server for WEB-340 site
*/

const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');

// Setup server views and logger
const app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('short'));

// Setup server routes
app.get('/', (request, response) => {
  response.render('index', {
    title: 'Home page',
  });
});

// Start the server
http.createServer(app).listen(8080, () => {
  console.log('Application started on port 8080!');
});

// --- Commands ---
// cd E:\Repos\web-340\ems
// * run server with command: node app.js
// * navigate to localhost:8080 or enter the command: curl -i localhost:8080
