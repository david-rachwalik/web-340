/*
    Title: rachwalik-status-codes.js
    Author: David Rachwalik
    Date: 2022/01/30
    Description: Exercise 4.3 for WEB-340 site
*/

const express = require('express');
const http = require('http');

const app = express();

// Setup server routes
app.get('/not-found', (request, response) => {
  response.status(404);
  response.json({
    error: 'The requested resource was not found.',
  });
});
app.get('/ok', (request, response) => {
  response.status(200);
  response.json({
    message: 'Page has loaded correctly.',
  });
});
app.get('/not-implemented', (request, response) => {
  response.status(501);
  response.json({
    error: 'This page has not yet been implemented.',
  });
});

// Start the server
http.createServer(app).listen(8080, () => {
  console.log('Application started on port 8080!');
});

// --- Commands ---
// cd E:\Repos\web-340\week-4\status-codes
// * run server with command: node rachwalik-status-codes.js
// * navigate to localhost:8080 or enter the command: curl -i localhost:8080
