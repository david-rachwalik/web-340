/*
    Title: app.js
    Author: David Rachwalik
    Date: 2022/02/13
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
app.use(express.static(`${__dirname}/public`)); // declare static directory

// Setup server routes
app.get('/', (request, response) => {
  response.render('index', {
    title: 'Home page',
  });
});
app.get('/list', (request, response) => {
  response.render('list', {
    title: 'Tabular View',
  });
});
app.get('/new', (request, response) => {
  response.render('new', {
    title: 'Data Entry',
  });
});
app.get('/view', (request, response) => {
  response.render('view', {
    title: 'Employee Details',
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
