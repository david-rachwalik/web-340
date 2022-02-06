/*
  Title: rachwalik-pug-template.js
  Author: David Rachwalik
  Date: 2022/02/06
  Description: Exercise 5.3 for WEB-340 site
*/

const express = require('express');
const http = require('http');
const pug = require('pug');
const path = require('path');

const app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

// Setup server routes
app.get('/', (request, response) => {
  response.render('index', {
    message: `Welcome to David Rachwalik's homepage, done in Pug!`,
  });
});

// Start the server
http.createServer(app).listen(8080, () => {
  console.log('Application started on port 8080!');
});

// --- Commands ---
// cd E:\Repos\web-340\week-5\pug-template
// * run server with command: node rachwalik-pug-template.js
// * navigate to localhost:8080 or enter the command: curl -i localhost:8080
