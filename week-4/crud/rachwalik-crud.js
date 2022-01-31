/*
    Title: rachwalik-crud.js
    Author: David Rachwalik
    Date: 2022/01/30
    Description: CRUD operations in a Node.js API
*/

const express = require('express');
const http = require('http');

const apiVersion1 = require('./rachwalik-crud-v1.js');
const apiVersion2 = require('./rachwalik-crud-v2.js');

const app = express();
app.set('port', process.env.PORT || 3000);
// Load routers for each API version
app.use('/v1', apiVersion1);
app.use('/v2', apiVersion2);
// Load default router version
app.use('/', apiVersion1);

// Start the server
http.createServer(app).listen(app.get('port'), () => {
  console.log(`Application started and listening on port ${app.get('port')}`);
});

// --- Commands ---
// cd E:\Repos\web-340\week-4\crud
// * run server with command: node rachwalik-crud.js
// * navigate to localhost:8080/customers or enter the command: curl -i localhost:8080/customers
// curl localhost:8080/customers
// curl -X POST localhost:8080/customers
// curl -X PUT localhost:8080/customers
// curl -X DELETE localhost:8080/customers
